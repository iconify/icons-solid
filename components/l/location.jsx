import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty-lp-pnh.css';
import '../../css/m/mz_p1xb-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ty-lp-pnh"/><path clip-rule="evenodd" class="mz_p1xb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:location"} {...others} />);
}

export default Component;

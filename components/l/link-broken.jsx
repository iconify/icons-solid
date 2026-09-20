import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyfj05bxs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fyfj05bxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:link-broken"} {...others} />);
}

export default Component;

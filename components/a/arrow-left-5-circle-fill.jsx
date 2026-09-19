import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3_5bzbqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k3_5bzbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-left-5-circle-fill"} {...others} />);
}

export default Component;

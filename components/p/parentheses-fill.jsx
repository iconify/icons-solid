import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg_p6bmic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg_p6bmic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:parentheses-fill"} {...others} />);
}

export default Component;

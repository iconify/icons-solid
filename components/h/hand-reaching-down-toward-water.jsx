import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux74nnriu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ux74nnriu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hand-reaching-down-toward-water"} {...others} />);
}

export default Component;

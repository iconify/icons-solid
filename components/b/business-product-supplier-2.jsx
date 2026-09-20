import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqpfuvb4h.css';
import '../../css/r/r5oe02zhf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqpfuvb4h"/><path class="r5oe02zhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-product-supplier-2"} {...others} />);
}

export default Component;

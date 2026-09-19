import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdsarc1ua.css';
import '../../css/g/gphd1nbjo.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="zdsarc1ua"/><path class="gphd1nbjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:factory-line"} {...others} />);
}

export default Component;

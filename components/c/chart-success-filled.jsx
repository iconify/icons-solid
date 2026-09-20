import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cviv7ubzl.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wb0n91bnb.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGye9ORcdG" class="cviv7ubzl"/></defs><g class="cuyn6tgcc"><use href="#SVGye9ORcdG"/><use href="#SVGye9ORcdG"/><path class="wb0n91bnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chart-success-filled"} {...others} />);
}

export default Component;

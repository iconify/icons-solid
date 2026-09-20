import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhnqpabwu.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":375,"height":375};
const content = `<defs><path id="SVGdOj2Ibak" class="nhnqpabwu"/></defs><use href="#SVGdOj2Ibak" class="d2kvgvbvc"/><use href="#SVGdOj2Ibak" class="d2kvgvbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:glincker"} {...others} />);
}

export default Component;

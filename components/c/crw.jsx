import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fhsbtpbzu.css';
import '../../css/a/acr2u9b0w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="fhsbtpbzu"/><path class="acr2u9b0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:crw"} {...others} />);
}

export default Component;

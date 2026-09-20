import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/b/b7whokbto.css';
import '../../css/h/hly-i-3lx.css';

const viewBox = {"width":548,"height":322};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGyX85CbGX)" clip-rule="evenodd" class="kvn14gsjy"><path class="b7whokbto"/></g><defs><clipPath id="SVGyX85CbGX"><path class="hly-i-3lx"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mindstudio"} {...others} />);
}

export default Component;

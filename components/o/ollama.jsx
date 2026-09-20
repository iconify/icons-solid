import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/iycln-b8i.css';
import '../../css/n/n2jjb_byf.css';
import '../../css/e/eiv1xdzqu.css';
import '../../css/e/ejpt7b0wx.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="bc1fd0lxe"/><defs><circle id="SVG1g8rabco" class="iycln-b8i"/></defs><clipPath id="SVGJdal8dOW"><use href="#SVG1g8rabco"/></clipPath><g clip-path="url(#SVGJdal8dOW)"><path class="n2jjb_byf"/><path class="eiv1xdzqu"/><path class="ejpt7b0wx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ollama"} {...others} />);
}

export default Component;

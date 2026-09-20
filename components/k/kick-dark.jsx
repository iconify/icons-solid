import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ah3jqwbbq.css';
import '../../css/c/cir3qxuka.css';
import '../../css/h/h8ynaxe7w.css';

const viewBox = {"width":933,"height":300};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGet6hIbve)"><g clip-path="url(#SVG8IscwcLq)"><path clip-rule="evenodd" class="ah3jqwbbq"/></g></g><defs><clipPath id="SVGet6hIbve"><path class="cir3qxuka"/></clipPath><clipPath id="SVG8IscwcLq"><path class="h8ynaxe7w"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kick-dark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6xqauijj.css';
import '../../css/w/wqdp9q3qu.css';
import '../../css/b/bi35x5b6a.css';
import '../../css/n/nvpwspzng.css';

const viewBox = {"width":184,"height":184};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG9TBU6dgR)" clip-rule="evenodd" class="a6xqauijj"><path class="wqdp9q3qu"/><path class="bi35x5b6a"/></g><defs><clipPath id="SVG9TBU6dgR"><path class="nvpwspzng"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:exome"} {...others} />);
}

export default Component;

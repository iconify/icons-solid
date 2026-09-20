import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d352xukaj.css';
import '../../css/n/nx5d-bc1s.css';
import '../../css/f/fng1jr83l.css';
import '../../css/b/b-x4x3b8h.css';

const viewBox = {"width":126,"height":48};
const content = `<defs><path id="SVGvabBJgMB" class="d352xukaj"/></defs><g class="nx5d-bc1s"><path class="fng1jr83l"/><mask id="SVGrqCFWbOR"><use href="#SVGvabBJgMB"/></mask><path mask="url(#SVGrqCFWbOR)" class="b-x4x3b8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:plaid-light"} {...others} />);
}

export default Component;

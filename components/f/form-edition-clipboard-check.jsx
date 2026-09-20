import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/ph4gv3bem.css';
import '../../css/e/e67j0c3_u.css';
import '../../css/c/ctop38bcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ph4gv3bem"/><path class="e67j0c3_u"/><path class="ctop38bcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:form-edition-clipboard-check"} {...others} />);
}

export default Component;

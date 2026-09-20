import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tzmolab6c.css';
import '../../css/f/fjys73b2m.css';
import '../../css/r/rir011h_h.css';
import '../../css/d/duaxodl1g.css';
import '../../css/j/j4i41sbbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tzmolab6c"/><path clip-rule="evenodd" class="fjys73b2m"/><path class="rir011h_h"/><path clip-rule="evenodd" class="duaxodl1g"/><path clip-rule="evenodd" class="j4i41sbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:graphic-template-website-ui-flat"} {...others} />);
}

export default Component;

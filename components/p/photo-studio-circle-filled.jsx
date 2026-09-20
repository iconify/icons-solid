import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/l/lsliji8wu.css';
import '../../css/a/awnfgxbdf.css';
import '../../css/m/m_gxrjzbq.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGtOR3rdRB"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="lsliji8wu"/><path class="awnfgxbdf"/><path class="m_gxrjzbq"/></g></mask></defs><circle mask="url(#SVGtOR3rdRB)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:photo-studio-circle-filled"} {...others} />);
}

export default Component;

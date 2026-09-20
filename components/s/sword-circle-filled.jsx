import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/h/h_19n4r8a.css';
import '../../css/x/xib8rybep.css';
import '../../css/l/lgi1zefvt.css';
import '../../css/w/w1_e9pbju.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGa00UybFh"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="h_19n4r8a"/><path class="xib8rybep"/><path class="lgi1zefvt"/><path class="w1_e9pbju"/></g></mask></defs><circle mask="url(#SVGa00UybFh)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:sword-circle-filled"} {...others} />);
}

export default Component;

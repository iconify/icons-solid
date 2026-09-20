import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/i/iov8d5b2r.css';
import '../../css/a/a1zqqilbh.css';
import '../../css/d/d2xxuhd-p.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGRXqnveKN"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="iov8d5b2r"/><path class="a1zqqilbh"/><path class="d2xxuhd-p"/></g></mask></defs><circle mask="url(#SVGRXqnveKN)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:eye-frame-circle-filled"} {...others} />);
}

export default Component;

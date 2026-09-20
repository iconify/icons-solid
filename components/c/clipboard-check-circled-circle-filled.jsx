import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/u/uzxb7dbfi.css';
import '../../css/z/zdg-6l18t.css';
import '../../css/v/vuzzriqjj.css';
import '../../css/a/a_22u3byu.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGnj9DUdkN"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="uzxb7dbfi"/><path class="zdg-6l18t"/><path class="vuzzriqjj"/><path class="a_22u3byu"/></g></mask></defs><circle mask="url(#SVGnj9DUdkN)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:clipboard-check-circled-circle-filled"} {...others} />);
}

export default Component;

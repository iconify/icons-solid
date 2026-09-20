import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/m/m-yrbu6hq.css';
import '../../css/j/j5vme-6vm.css';
import '../../css/j/ju7fwrb5h.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGvHdKsovb"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="m-yrbu6hq"/><path class="j5vme-6vm"/><path class="ju7fwrb5h"/></g></mask></defs><circle mask="url(#SVGvHdKsovb)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:hourglass-circle-filled"} {...others} />);
}

export default Component;

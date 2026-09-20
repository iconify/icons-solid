import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/x/xmx9zi21u.css';
import '../../css/l/l8z7n1gta.css';
import '../../css/b/b-h0r-bhn.css';
import '../../css/q/q505187yx.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGo9z0ubsg"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="xmx9zi21u"/><path class="l8z7n1gta"/><path clip-rule="evenodd" class="b-h0r-bhn"/><path clip-rule="evenodd" class="q505187yx"/></g></mask></defs><circle mask="url(#SVGo9z0ubsg)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:flower-circle-filled"} {...others} />);
}

export default Component;

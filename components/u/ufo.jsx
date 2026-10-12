import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_65zvb4n.css';
import '../../css/i/i9484eh5t.css';
import '../../css/q/qlom2cc4y.css';
import '../../css/g/glnf9fb8v.css';
import '../../css/n/n00h673gu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x_65zvb4n"/><path class="i9484eh5t"/><path class="qlom2cc4y"/><path class="glnf9fb8v"/><path class="n00h673gu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ufo"} {...others} />);
}

export default Component;

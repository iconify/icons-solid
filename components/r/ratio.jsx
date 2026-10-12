import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4f339btf.css';
import '../../css/n/n6mj4s-8y.css';
import '../../css/z/zygi5hb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="z4f339btf"/><rect class="n6mj4s-8y"/><rect transform="rotate(-90 6.32 21.38)" class="zygi5hb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ratio"} {...others} />);
}

export default Component;

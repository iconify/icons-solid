import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydt-crpjk.css';
import '../../css/k/kqwt2ibko.css';
import '../../css/h/h_tdzjpmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ydt-crpjk"/><path class="kqwt2ibko"/><path class="h_tdzjpmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:layers-minus"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_5wk7bvq.css';
import '../../css/v/vn-sww8pp.css';
import '../../css/f/fodjydsnw.css';
import '../../css/w/w8lmf2b2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x_5wk7bvq"/><path class="vn-sww8pp"/><path class="fodjydsnw"/><path class="w8lmf2b2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:pea"} {...others} />);
}

export default Component;

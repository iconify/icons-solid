import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zadhsv03k.css';
import '../../css/h/hayu7tb_a.css';
import '../../css/k/kfc-s6m9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zadhsv03k"/><rect class="hayu7tb_a"/><path class="kfc-s6m9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:box-archive"} {...others} />);
}

export default Component;

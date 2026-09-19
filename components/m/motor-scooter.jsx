import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zrh8drb3j.css';
import '../../css/j/ju5mrhb1i.css';
import '../../css/q/q_libacnv.css';
import '../../css/z/zqwb84tpf.css';
import '../../css/o/o35c28_8g.css';
import '../../css/m/mqx_zs-pd.css';
import '../../css/y/y8x3qvw9a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="zrh8drb3j"/><path class="ju5mrhb1i"/><path class="q_libacnv"/><path class="zqwb84tpf"/><path class="o35c28_8g"/><path class="mqx_zs-pd"/><path class="y8x3qvw9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:motor-scooter"} {...others} />);
}

export default Component;

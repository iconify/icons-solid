import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hvaroobas.css';
import '../../css/e/e5b0-7b7z.css';
import '../../css/j/jlt6cz9om.css';
import '../../css/l/lchweacmg.css';
import '../../css/z/z0-ajxbiw.css';
import '../../css/f/fj3yoyc-w.css';
import '../../css/g/g88fy81jp.css';
import '../../css/n/ni01afb5j.css';
import '../../css/t/tpkw633-q.css';
import '../../css/z/zggyo3ykb.css';
import '../../css/k/khs0aub_z.css';
import '../../css/w/w3nhe-bjb.css';
import '../../css/x/xvr4tz9ww.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hvaroobas"/><path class="e5b0-7b7z"/><path class="jlt6cz9om"/><path class="lchweacmg"/><path class="z0-ajxbiw"/><path class="fj3yoyc-w"/><path class="g88fy81jp"/><path class="ni01afb5j"/><path class="tpkw633-q"/><path class="zggyo3ykb"/><path class="khs0aub_z"/><path class="w3nhe-bjb"/><path class="xvr4tz9ww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-with-headscarf-medium-dark"} {...others} />);
}

export default Component;

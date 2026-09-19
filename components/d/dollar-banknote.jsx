import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-tsvfb5f.css';
import '../../css/a/aor8e_ljs.css';
import '../../css/k/kd5oxwbto.css';
import '../../css/l/ltsbsuq_l.css';
import '../../css/u/u12k9bhui.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="a-tsvfb5f"/><path class="aor8e_ljs"/><path class="kd5oxwbto"/><path class="ltsbsuq_l"/><path class="u12k9bhui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:dollar-banknote"} {...others} />);
}

export default Component;

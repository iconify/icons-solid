import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1al5fbfn.css';
import '../../css/j/jh3q-sbpc.css';
import '../../css/r/ro3q5yb7w.css';
import '../../css/a/a174vsbcs.css';
import '../../css/q/qwk7vccco.css';
import '../../css/l/lkr_enane.css';
import '../../css/m/m49usitxr.css';
import '../../css/a/a4oit020g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m1al5fbfn wm-shadow"/><path class="jh3q-sbpc wm-k"/><path class="ro3q5yb7w wm-k"/><path class="a174vsbcs wm-a"/><path class="qwk7vccco wm-a"/><path class="lkr_enane wm-a"/><path class="m49usitxr wm-a"/><path class="a4oit020g wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-left-to-line"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qclzbtbif.css';
import '../../css/j/jfo12zkov.css';
import '../../css/q/q1zcycb4d.css';
import '../../css/b/bq1tzhjej.css';
import '../../css/e/ekyf0p0bl.css';
import '../../css/q/q1a4ypkca.css';
import '../../css/k/kdfpa8bib.css';
import '../../css/a/a81ccqhtd.css';
import '../../css/w/w7ssucchx.css';
import '../../css/o/o0qy2zbev.css';
import '../../css/s/s4-1kioee.css';
import '../../css/f/fp2d54bjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qclzbtbif wm-shadow"/><path class="jfo12zkov wm-k"/><path class="q1zcycb4d wm-k"/><path class="bq1tzhjej wm-k"/><path class="ekyf0p0bl wm-k"/><path class="q1a4ypkca wm-shine"/><path class="kdfpa8bib wm-k"/><path class="a81ccqhtd wm-s"/><path class="w7ssucchx wm-s"/><path class="o0qy2zbev wm-s"/><path class="s4-1kioee wm-s"/><path class="fp2d54bjh wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:phone-off"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su5sxqbdo.css';
import '../../css/r/rv1mylbja.css';
import '../../css/x/x9xwxpbju.css';
import '../../css/b/b8_ctsbgx.css';
import '../../css/c/c799xxbsd.css';
import '../../css/a/az_16cc-k.css';
import '../../css/j/jaefz4bse.css';
import '../../css/z/zlec57vcd.css';
import '../../css/z/zkir3ibvq.css';
import '../../css/n/nr83thgud.css';
import '../../css/h/h67ih_8wq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="su5sxqbdo wm-shadow"/><path class="rv1mylbja wm-k"/><path class="wm-k x9xwxpbju"/><path class="b8_ctsbgx wm-a"/><path class="c799xxbsd wm-a"/><path class="az_16cc-k wm-a"/><path class="jaefz4bse wm-a"/><path class="wm-a zlec57vcd"/><path class="wm-k zkir3ibvq"/><path class="nr83thgud wm-k"/><path class="h67ih_8wq wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:scan-eye"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snp287xku.css';
import '../../css/d/df-gwtloe.css';
import '../../css/o/o4jeclbyr.css';
import '../../css/x/xlumf6buz.css';
import '../../css/i/idpp5bbeh.css';
import '../../css/r/rj79jpb1f.css';
import '../../css/j/jkmas_h7c.css';
import '../../css/u/ufl33dbze.css';
import '../../css/l/lehls-yxu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="snp287xku"/><path class="df-gwtloe"/><path class="o4jeclbyr"/><path class="xlumf6buz"/><path class="idpp5bbeh"/><path class="rj79jpb1f"/><path class="jkmas_h7c"/><path class="ufl33dbze"/><path class="lehls-yxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:globe-showing-americas"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snp287xku.css';
import '../../css/d/df-gwtloe.css';
import '../../css/o/o4jeclbyr.css';
import '../../css/x/xlumf6buz.css';
import '../../css/g/gr58g7w1n.css';
import '../../css/v/vddf-pl6d.css';
import '../../css/p/pjhsa7b8q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="snp287xku"/><path class="df-gwtloe"/><path class="o4jeclbyr"/><path class="xlumf6buz"/><path class="gr58g7w1n"/><path class="vddf-pl6d"/><path class="pjhsa7b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:globe-showing-europe-africa"} {...others} />);
}

export default Component;

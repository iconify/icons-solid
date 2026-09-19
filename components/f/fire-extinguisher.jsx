import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmc7hu2bo.css';
import '../../css/j/jpbl_guwj.css';
import '../../css/s/s-wrx8p7w.css';
import '../../css/a/ahsoxf_7b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cmc7hu2bo"/><path class="jpbl_guwj"/><path class="s-wrx8p7w"/><circle class="ahsoxf_7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:fire-extinguisher"} {...others} />);
}

export default Component;

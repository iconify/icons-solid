import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f10xv_b6p.css';
import '../../css/z/z8gabvb4b.css';
import '../../css/g/ghz83pb9j.css';
import '../../css/e/entch9b8s.css';
import '../../css/n/ni4h37t6j.css';
import '../../css/v/vb3r9ol9a.css';
import '../../css/z/zgb81f-7w.css';
import '../../css/q/qki6a_myx.css';
import '../../css/z/zbfmn9k_i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f10xv_b6p"/><path class="z8gabvb4b"/><circle class="ghz83pb9j"/><path class="entch9b8s"/><path class="ni4h37t6j"/><circle class="vb3r9ol9a"/><path class="zgb81f-7w"/><path class="qki6a_myx"/><circle class="zbfmn9k_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:multiple-smartphones"} {...others} />);
}

export default Component;

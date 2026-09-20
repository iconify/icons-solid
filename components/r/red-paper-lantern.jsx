import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i60630bpe.css';
import '../../css/i/iphmxhb-f.css';
import '../../css/h/hipqqp8vo.css';
import '../../css/k/k3v9wpwxy.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/c/clmcrwg6b.css';
import '../../css/j/jd3jrxv-w.css';
import '../../css/v/vjl_6jw6g.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="i60630bpe"/><path class="iphmxhb-f"/><rect class="hipqqp8vo"/><path class="k3v9wpwxy"/><g class="rpvb-o6bq"><path class="clmcrwg6b"/><rect class="jd3jrxv-w"/><path class="vjl_6jw6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:red-paper-lantern"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk8vpbcvi.css';
import '../../css/b/b_4xs251q.css';
import '../../css/c/cutpm3zql.css';
import '../../css/c/cjpf05bsi.css';
import '../../css/m/mkjwrmbqt.css';
import '../../css/p/ptk9vwn0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bk8vpbcvi"/><path class="b_4xs251q"/><path class="cutpm3zql"/><path class="cjpf05bsi"/><path class="mkjwrmbqt"/><path class="ptk9vwn0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:computer-chip-core"} {...others} />);
}

export default Component;

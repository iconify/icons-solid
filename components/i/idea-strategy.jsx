import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/noolgymyg.css';
import '../../css/s/sc015wb1g.css';
import '../../css/j/j090o7dwf.css';
import '../../css/u/u4axhd5pr.css';
import '../../css/w/w19x39b-n.css';
import '../../css/a/a-fpj8v5f.css';
import '../../css/u/uuwhxfd1b.css';
import '../../css/b/b-j-b2piq.css';
import '../../css/x/xwkqkm60w.css';
import '../../css/b/bdtnthtci.css';
import '../../css/v/vkopiccyh.css';
import '../../css/w/w3lvd2jjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="noolgymyg"/><path class="sc015wb1g"/><path class="j090o7dwf"/><path class="u4axhd5pr"/><path class="w19x39b-n"/><path class="a-fpj8v5f"/><path class="uuwhxfd1b"/><path class="b-j-b2piq"/><path class="xwkqkm60w"/><path class="bdtnthtci"/><path class="vkopiccyh"/><path class="w3lvd2jjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:idea-strategy"} {...others} />);
}

export default Component;

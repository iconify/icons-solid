import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k989r-bis.css';
import '../../css/l/lr8gvf09r.css';
import '../../css/j/jxg5-_o0q.css';
import '../../css/f/fkgyoyhzs.css';
import '../../css/v/vdh35hb3g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k989r-bis"/><path class="lr8gvf09r"/><path class="jxg5-_o0q"/><path class="fkgyoyhzs"/><path class="vdh35hb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pv-string-48"} {...others} />);
}

export default Component;

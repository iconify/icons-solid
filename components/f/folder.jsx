import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/odkv85b5q.css';
import '../../css/x/xfipzh60a.css';
import '../../css/i/i7oi4p2ty.css';
import '../../css/d/d7s34_ipq.css';
import '../../css/b/bq9iuqbqy.css';
import '../../css/q/qhbzh6b-t.css';
import '../../css/r/r052mubds.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="odkv85b5q"/><path class="xfipzh60a"/><path class="i7oi4p2ty"/><path class="d7s34_ipq"/><circle class="bq9iuqbqy"/><path class="qhbzh6b-t"/><path class="r052mubds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder"} {...others} />);
}

export default Component;

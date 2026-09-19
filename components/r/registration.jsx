import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6zykjo1m.css';
import '../../css/i/iswtnbc3q.css';
import '../../css/j/jcu975bro.css';
import '../../css/v/vdjukgb6m.css';
import '../../css/f/f2pbm3k3l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n6zykjo1m"/><path class="iswtnbc3q"/><path class="jcu975bro"/><path class="vdjukgb6m"/><path class="f2pbm3k3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:registration"} {...others} />);
}

export default Component;

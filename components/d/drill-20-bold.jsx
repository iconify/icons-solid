import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp-n21b6g.css';
import '../../css/g/gnaan2b9l.css';
import '../../css/g/gadfch4xe.css';
import '../../css/k/kjg3jgbzc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cp-n21b6g"/><path class="gnaan2b9l"/><path class="gadfch4xe"/><path class="kjg3jgbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drill-20-bold"} {...others} />);
}

export default Component;

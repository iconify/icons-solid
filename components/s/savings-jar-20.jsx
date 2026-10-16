import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c59tb1b5l.css';
import '../../css/b/b18xgubfy.css';
import '../../css/o/onc6e2gme.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c59tb1b5l"/><path class="b18xgubfy"/><path class="onc6e2gme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:savings-jar-20"} {...others} />);
}

export default Component;

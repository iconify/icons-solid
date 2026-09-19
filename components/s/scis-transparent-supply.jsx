import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b00cr1lqw.css';
import '../../css/k/kbewb6b5s.css';
import '../../css/e/ee744kfgx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b00cr1lqw"/><path class="kbewb6b5s"/><path class="ee744kfgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:scis-transparent-supply"} {...others} />);
}

export default Component;

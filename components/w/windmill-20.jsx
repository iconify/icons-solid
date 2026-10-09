import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukjsobcvo.css';
import '../../css/v/vss9bg_wd.css';
import '../../css/c/cndhhqb2a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ukjsobcvo"/><path class="vss9bg_wd"/><path class="cndhhqb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:windmill-20"} {...others} />);
}

export default Component;

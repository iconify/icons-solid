import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv6_rebxi.css';
import '../../css/a/ak3pdnn1p.css';
import '../../css/s/sv8sqhg9g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iv6_rebxi"/><path class="ak3pdnn1p"/><path class="sv8sqhg9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-pipeline-20"} {...others} />);
}

export default Component;

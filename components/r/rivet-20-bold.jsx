import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mixyt5cvw.css';
import '../../css/c/c-gfqebqa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mixyt5cvw"/><path class="c-gfqebqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rivet-20-bold"} {...others} />);
}

export default Component;

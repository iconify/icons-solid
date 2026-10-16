import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjml_t-hp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zjml_t-hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moonrise-20-bold"} {...others} />);
}

export default Component;

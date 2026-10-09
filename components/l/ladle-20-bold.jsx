import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-jm55j8c.css';
import '../../css/j/j-o8fhbra.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k-jm55j8c"/><path class="j-o8fhbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ladle-20-bold"} {...others} />);
}

export default Component;

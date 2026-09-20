import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml63hhbka.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ml63hhbka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:separate-horizontal-16"} {...others} />);
}

export default Component;

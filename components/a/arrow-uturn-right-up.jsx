import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lch49bcjr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lch49bcjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-uturn-right-up"} {...others} />);
}

export default Component;

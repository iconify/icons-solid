import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb4x6yu9m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xb4x6yu9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-uturn-up-right"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo9vs-bki.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qo9vs-bki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:paper-airplane-16-solid"} {...others} />);
}

export default Component;

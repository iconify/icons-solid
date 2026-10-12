import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv8ehtyui.css';
import '../../css/a/afwi5ac4o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rv8ehtyui"/><path class="afwi5ac4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chalkboard-20-bold"} {...others} />);
}

export default Component;

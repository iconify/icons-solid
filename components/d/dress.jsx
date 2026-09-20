import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-mgfz0ds.css';
import '../../css/m/m-lu0swiy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b-mgfz0ds"/><path class="m-lu0swiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dress"} {...others} />);
}

export default Component;

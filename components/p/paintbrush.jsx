import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy4pt5qrs.css';

const viewBox = {"width":22,"height":32};
const content = `<path class="zy4pt5qrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:paintbrush"} {...others} />);
}

export default Component;

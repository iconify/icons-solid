import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2l1x3bxz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b2l1x3bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:street-cabinet-drop"} {...others} />);
}

export default Component;

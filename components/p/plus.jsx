import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbw5l6n7c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mbw5l6n7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:plus"} {...others} />);
}

export default Component;

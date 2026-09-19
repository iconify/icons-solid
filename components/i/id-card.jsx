import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9wtks1km.css';

const viewBox = {"width":2112,"height":1568};
const content = `<path class="e9wtks1km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:id-card"} {...others} />);
}

export default Component;

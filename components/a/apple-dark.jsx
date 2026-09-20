import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6jy5bc9c.css';

const viewBox = {"width":814,"height":1000};
const content = `<path class="z6jy5bc9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:apple-dark"} {...others} />);
}

export default Component;

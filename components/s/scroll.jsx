import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa0qmzb2d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xa0qmzb2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:scroll"} {...others} />);
}

export default Component;

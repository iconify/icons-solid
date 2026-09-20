import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bln9h5d3b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bln9h5d3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:itunes"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz2qli0dy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oz2qli0dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:mars-double"} {...others} />);
}

export default Component;

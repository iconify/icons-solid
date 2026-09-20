import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts-x918ig.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ts-x918ig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:arrow-circle-down-solid"} {...others} />);
}

export default Component;

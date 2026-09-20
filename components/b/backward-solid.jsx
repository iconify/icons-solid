import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szc-0q-at.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="szc-0q-at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:backward-solid"} {...others} />);
}

export default Component;

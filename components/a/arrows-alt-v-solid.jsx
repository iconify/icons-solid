import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8chywiab.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d8chywiab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:arrows-alt-v-solid"} {...others} />);
}

export default Component;

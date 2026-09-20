import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itemg20bc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="itemg20bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:blogger"} {...others} />);
}

export default Component;

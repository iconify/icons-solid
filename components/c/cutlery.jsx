import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it86vwbog.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};
const content = `<path class="it86vwbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:cutlery"} {...others} />);
}

export default Component;

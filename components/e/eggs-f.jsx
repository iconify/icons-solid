import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_cu8y8xa.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3.5};
const content = `<path class="c_cu8y8xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:eggs-f"} {...others} />);
}

export default Component;

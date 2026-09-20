import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjvs6cczp.css';

const viewBox = {"width":24,"height":24,"left":-3.5,"top":-2};
const content = `<path class="wjvs6cczp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:apple"} {...others} />);
}

export default Component;

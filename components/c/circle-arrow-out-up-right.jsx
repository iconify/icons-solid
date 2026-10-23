import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcrzizbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jcrzizbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:circle-arrow-out-up-right"} {...others} />);
}

export default Component;

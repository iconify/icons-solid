import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs3xk0brh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hs3xk0brh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:1-minus-above-water"} {...others} />);
}

export default Component;

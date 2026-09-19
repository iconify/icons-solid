import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eebg1actu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eebg1actu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:pin-3"} {...others} />);
}

export default Component;

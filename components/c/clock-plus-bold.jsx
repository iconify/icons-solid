import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyx-p81np.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="uyx-p81np"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:clock-plus-bold"} {...others} />);
}

export default Component;

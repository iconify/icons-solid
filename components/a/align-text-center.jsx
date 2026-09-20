import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf6_ihbwv.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="bf6_ihbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:align-text-center"} {...others} />);
}

export default Component;

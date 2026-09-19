import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-e-5bb3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-e-5bb3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:crown"} {...others} />);
}

export default Component;

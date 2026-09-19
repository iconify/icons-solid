import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uimkucb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uimkucb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:blur-alt-filled"} {...others} />);
}

export default Component;

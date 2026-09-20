import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am88q0t7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="am88q0t7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:transfer-right-light"} {...others} />);
}

export default Component;

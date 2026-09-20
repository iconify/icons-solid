import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz_e4bjlc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qz_e4bjlc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:angle-left"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksfo4bxvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ksfo4bxvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:microsoft"} {...others} />);
}

export default Component;

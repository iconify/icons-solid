import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvoxb-ghc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvoxb-ghc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layer-send-backward"} {...others} />);
}

export default Component;

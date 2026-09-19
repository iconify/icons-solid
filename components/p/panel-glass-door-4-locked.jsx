import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-ni3xu8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p-ni3xu8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:panel-glass-door-4-locked"} {...others} />);
}

export default Component;

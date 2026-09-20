import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgrld-brg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hgrld-brg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:segment-duotone"} {...others} />);
}

export default Component;

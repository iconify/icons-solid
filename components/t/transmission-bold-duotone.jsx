import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw-szkbrd.css';
import '../../css/f/f96gcgbma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yw-szkbrd"/><path clip-rule="evenodd" class="f96gcgbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transmission-bold-duotone"} {...others} />);
}

export default Component;

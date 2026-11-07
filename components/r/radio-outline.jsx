import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mew9r2bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mew9r2bpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radio-outline"} {...others} />);
}

export default Component;

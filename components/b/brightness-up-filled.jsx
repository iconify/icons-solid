import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lejmcut1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lejmcut1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brightness-up-filled"} {...others} />);
}

export default Component;

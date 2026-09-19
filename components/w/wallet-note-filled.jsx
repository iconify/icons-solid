import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utnljdo3d.css';
import '../../css/p/pw5u487pl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utnljdo3d"/><path class="pw5u487pl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wallet-note-filled"} {...others} />);
}

export default Component;

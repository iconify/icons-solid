import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1j18jb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1j18jb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:face-angry-fill-round"} {...others} />);
}

export default Component;

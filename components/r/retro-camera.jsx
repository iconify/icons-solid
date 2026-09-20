import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bji8i1b_f.css';
import '../../css/z/z-imr2beg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bji8i1b_f"/><path class="z-imr2beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:retro-camera"} {...others} />);
}

export default Component;

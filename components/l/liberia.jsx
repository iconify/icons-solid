import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/c/c1zfbkbdz.css';
import '../../css/a/a233-fb1y.css';
import '../../css/m/m7qormcrk.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="c1zfbkbdz"/><path class="a233-fb1y"/><path class="m7qormcrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:liberia"} {...others} />);
}

export default Component;

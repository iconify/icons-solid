import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmc2g5_rg.css';
import '../../css/s/s5ck4pbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmc2g5_rg"/><path class="s5ck4pbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-shekel"} {...others} />);
}

export default Component;

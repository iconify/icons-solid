import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxlfpzpjb.css';
import '../../css/f/fce5xcc5l.css';
import '../../css/h/hyt904_lx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxlfpzpjb"/><path clip-rule="evenodd" class="fce5xcc5l"/><path class="hyt904_lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:globe-lock-filled"} {...others} />);
}

export default Component;

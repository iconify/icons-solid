import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw003mslz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lw003mslz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:file-landscape-alt"} {...others} />);
}

export default Component;

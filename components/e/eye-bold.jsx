import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk94-14if.css';
import '../../css/t/tjyrjeb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kk94-14if"/><path clip-rule="evenodd" class="tjyrjeb2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eye-bold"} {...others} />);
}

export default Component;

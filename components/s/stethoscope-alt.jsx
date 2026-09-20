import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5j0rp9zi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k5j0rp9zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:stethoscope-alt"} {...others} />);
}

export default Component;

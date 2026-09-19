import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyj3-clpj.css';
import '../../css/f/fda9wbmzj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eyj3-clpj"/><path class="fda9wbmzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:outdoor-dining-filled"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9h1r_bas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t9h1r_bas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:leaf-filled"} {...others} />);
}

export default Component;

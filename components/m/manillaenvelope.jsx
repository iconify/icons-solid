import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0msh_vzg.css';

const viewBox = {"width":833,"height":1024};
const content = `<path class="m0msh_vzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:manillaenvelope"} {...others} />);
}

export default Component;

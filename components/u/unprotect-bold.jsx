import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma33lmbkx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ma33lmbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:unprotect-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xta6e_j8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xta6e_j8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:login-key-bold"} {...others} />);
}

export default Component;

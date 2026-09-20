import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxjk6z-uv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxjk6z-uv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:sun-set-2"} {...others} />);
}

export default Component;

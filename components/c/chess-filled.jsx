import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynpjq9bxw.css';
import '../../css/q/q6_bp8una.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ynpjq9bxw"/><path class="q6_bp8una"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chess-filled"} {...others} />);
}

export default Component;

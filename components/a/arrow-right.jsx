import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgx_e8bxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qgx_e8bxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:arrow-right"} {...others} />);
}

export default Component;

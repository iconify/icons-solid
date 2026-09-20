import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0_sj-vvr.css';
import '../../css/m/maum05bfh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p0_sj-vvr"/><path class="maum05bfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:times-circle"} {...others} />);
}

export default Component;

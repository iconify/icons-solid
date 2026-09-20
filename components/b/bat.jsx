import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_86mbcpr.css';
import '../../css/c/c8vd1xbye.css';
import '../../css/z/z05_jybpy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_86mbcpr"/><path class="c8vd1xbye"/><path class="z05_jybpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bat"} {...others} />);
}

export default Component;

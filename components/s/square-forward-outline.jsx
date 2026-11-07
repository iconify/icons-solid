import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn528ebyy.css';
import '../../css/i/ixa_i_r1u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bn528ebyy"/><path class="ixa_i_r1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-forward-outline"} {...others} />);
}

export default Component;

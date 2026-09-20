import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk4mz_b8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xk4mz_b8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:open-source-initiative"} {...others} />);
}

export default Component;

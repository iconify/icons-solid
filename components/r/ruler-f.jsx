import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k58z08pzr.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-2};
const content = `<path class="k58z08pzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:ruler-f"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj0_tcbbp.css';
import '../../css/j/jz4jx24-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cj0_tcbbp"/><path class="jz4jx24-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:scan-filled"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6rueab4y.css';
import '../../css/k/kcx9ch0qs.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="e6rueab4y"/><path class="kcx9ch0qs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:ukraine"} {...others} />);
}

export default Component;

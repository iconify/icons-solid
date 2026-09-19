import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqtl7_d8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kqtl7_d8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:grid-row-bottom"} {...others} />);
}

export default Component;

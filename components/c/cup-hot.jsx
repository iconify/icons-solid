import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj7eyqd0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj7eyqd0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cup-hot"} {...others} />);
}

export default Component;

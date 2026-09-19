import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksu31ioyl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b ksu31ioyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:circle-dashed-half"} {...others} />);
}

export default Component;

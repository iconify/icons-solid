import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nce_cccod.css';
import '../../css/k/khwun-byq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nce_cccod"/><path class="khwun-byq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:database-messaging"} {...others} />);
}

export default Component;

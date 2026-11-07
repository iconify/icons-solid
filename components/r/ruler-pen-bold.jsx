import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkyfhubwr.css';
import '../../css/z/zyz94_b1d.css';
import '../../css/k/ksibtyk_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mkyfhubwr"/><path class="zyz94_b1d"/><path class="ksibtyk_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-pen-bold"} {...others} />);
}

export default Component;

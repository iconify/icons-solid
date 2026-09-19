import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9dfu13yp.css';
import '../../css/b/bn6ebpb5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a9dfu13yp"/><path class="bn6ebpb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-up-right-stroke-square"} {...others} />);
}

export default Component;

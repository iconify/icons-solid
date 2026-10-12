import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kslho1p0c.css';
import '../../css/l/lizimdblx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kslho1p0c"/><path class="lizimdblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:globe-off-filled"} {...others} />);
}

export default Component;

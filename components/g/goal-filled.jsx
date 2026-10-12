import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx50cdblo.css';
import '../../css/s/skotkdb7i.css';
import '../../css/k/keplz_bav.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dx50cdblo"/><path class="skotkdb7i"/><path class="keplz_bav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:goal-filled"} {...others} />);
}

export default Component;

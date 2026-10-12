import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_r9uibzg.css';
import '../../css/g/gbd4jm86s.css';
import '../../css/z/zc_h-6bbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_r9uibzg"/><path class="gbd4jm86s"/><path class="zc_h-6bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-check-filled"} {...others} />);
}

export default Component;

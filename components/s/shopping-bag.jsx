import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsgqmskrc.css';
import '../../css/o/o0y5tdbqm.css';
import '../../css/s/sga_f_diy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fsgqmskrc wm-a"/><path class="o0y5tdbqm wm-k"/><path class="sga_f_diy wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:shopping-bag"} {...others} />);
}

export default Component;

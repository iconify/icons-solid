import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukbct-jgm.css';
import '../../css/n/n6fnwhbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="ukbct-jgm"/><path class="n6fnwhbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:men-bold-duotone"} {...others} />);
}

export default Component;

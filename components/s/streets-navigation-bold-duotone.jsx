import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa4c_mbug.css';
import '../../css/o/o98yw8b4w.css';
import '../../css/x/xt-xue_6i.css';
import '../../css/k/kric1lb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wa4c_mbug"/><path class="o98yw8b4w"/><path class="xt-xue_6i"/><path class="kric1lb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-navigation-bold-duotone"} {...others} />);
}

export default Component;

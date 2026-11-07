import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa4c_mbug.css';
import '../../css/j/juwk50edv.css';
import '../../css/p/p6myf1z6f.css';
import '../../css/x/xt-xue_6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wa4c_mbug"/><path class="juwk50edv"/><path class="p6myf1z6f"/><path class="xt-xue_6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-navigation-bold"} {...others} />);
}

export default Component;

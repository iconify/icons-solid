import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8f365c-u.css';
import '../../css/j/jjp92xbjh.css';
import '../../css/m/mrmmz5sme.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8f365c-u"/><path class="jjp92xbjh"/><path class="mrmmz5sme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-minimalistic-outline"} {...others} />);
}

export default Component;

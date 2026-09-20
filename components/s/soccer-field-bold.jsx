import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srtsafpvb.css';
import '../../css/t/tzjolqugh.css';
import '../../css/h/hmefgwsmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="srtsafpvb"/><path class="tzjolqugh"/><path class="hmefgwsmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:soccer-field-bold"} {...others} />);
}

export default Component;

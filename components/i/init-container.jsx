import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5tcmf-xm.css';
import '../../css/w/wo40o9c3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f5tcmf-xm"/><path class="wo40o9c3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:init-container"} {...others} />);
}

export default Component;

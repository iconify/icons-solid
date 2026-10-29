import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox08aobaw.css';
import '../../css/j/jakijgftv.css';
import '../../css/u/uhwmgubuh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ox08aobaw wm-a"/><path class="jakijgftv wm-k"/><path class="uhwmgubuh wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:users"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymn00fgdm.css';
import '../../css/v/vowsucibp.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="ymn00fgdm"/><path class="vowsucibp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:user-add"} {...others} />);
}

export default Component;

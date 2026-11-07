import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnjvphbgm.css';
import '../../css/t/twgj61vyf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wnjvphbgm"/><path class="twgj61vyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-dropped-rounded-bold"} {...others} />);
}

export default Component;

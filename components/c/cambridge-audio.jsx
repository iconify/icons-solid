import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vobjp9-9u.css';
import '../../css/v/vgc92oekq.css';
import '../../css/f/fvq226bxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vobjp9-9u"/><path class="vgc92oekq"/><path class="fvq226bxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:cambridge-audio"} {...others} />);
}

export default Component;

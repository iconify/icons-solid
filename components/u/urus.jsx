import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl7hxid5w.css';
import '../../css/r/rs4bqbchn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yl7hxid5w"/><path class="rs4bqbchn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:urus"} {...others} />);
}

export default Component;

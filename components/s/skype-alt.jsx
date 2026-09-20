import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txxcw59-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txxcw59-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:skype-alt"} {...others} />);
}

export default Component;

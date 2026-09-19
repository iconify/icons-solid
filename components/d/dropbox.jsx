import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg7d5d_ua.css';

const viewBox = {"width":26,"height":24};
const content = `<path class="tg7d5d_ua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:dropbox"} {...others} />);
}

export default Component;

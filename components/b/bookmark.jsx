import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct12hn0tg.css';
import '../../css/i/im4c1bc7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ct12hn0tg duoicon-secondary-layer"/><path class="duoicon-primary-layer im4c1bc7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:bookmark"} {...others} />);
}

export default Component;

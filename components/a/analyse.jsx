import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3m-y_svk.css';
import '../../css/d/da4kpub6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3m-y_svk"/><path class="da4kpub6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:analyse"} {...others} />);
}

export default Component;

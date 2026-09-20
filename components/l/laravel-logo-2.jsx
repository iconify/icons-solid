import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2ju8nk3u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d2ju8nk3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:laravel-logo-2"} {...others} />);
}

export default Component;

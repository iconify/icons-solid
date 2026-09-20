import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kaz-7ebrm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kaz-7ebrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:arch-linux-logo"} {...others} />);
}

export default Component;

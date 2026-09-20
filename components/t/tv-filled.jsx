import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9u5hk_ay.css';
import '../../css/e/eu62npp2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i9u5hk_ay"/><path class="eu62npp2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tv-filled"} {...others} />);
}

export default Component;

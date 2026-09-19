import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8qr_m7mb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v8qr_m7mb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:home-alt-check"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czww5qr0o.css';

const viewBox = {"width":34,"height":24};
const content = `<path class="czww5qr0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:gg"} {...others} />);
}

export default Component;

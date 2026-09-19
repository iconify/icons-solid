import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgqgi3exg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zgqgi3exg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:telenet-tv"} {...others} />);
}

export default Component;

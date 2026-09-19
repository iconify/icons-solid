import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khoq0k05p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="khoq0k05p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:playstation-3"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pid1qrb3p.css';
import '../../css/j/jng12gler.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pid1qrb3p"/><path class="jng12gler"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nord"} {...others} />);
}

export default Component;

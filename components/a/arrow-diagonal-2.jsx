import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aeuiky0sr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aeuiky0sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:arrow-diagonal-2"} {...others} />);
}

export default Component;

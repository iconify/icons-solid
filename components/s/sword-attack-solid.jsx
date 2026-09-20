import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vayc-0b-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vayc-0b-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:sword-attack-solid"} {...others} />);
}

export default Component;

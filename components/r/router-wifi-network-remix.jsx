import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psv555bke.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="psv555bke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:router-wifi-network-remix"} {...others} />);
}

export default Component;

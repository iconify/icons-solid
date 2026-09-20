import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdzt5t5un.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pdzt5t5un"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:location-office-remix"} {...others} />);
}

export default Component;

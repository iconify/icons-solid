import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/steyh-bff.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="steyh-bff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:trophy-solid"} {...others} />);
}

export default Component;

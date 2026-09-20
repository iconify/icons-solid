import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkqy2hbla.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xkqy2hbla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:information-circle-solid"} {...others} />);
}

export default Component;

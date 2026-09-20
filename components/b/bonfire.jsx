import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkf9rhutl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hkf9rhutl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bonfire"} {...others} />);
}

export default Component;

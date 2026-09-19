import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu8io8bif.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vu8io8bif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:sun"} {...others} />);
}

export default Component;

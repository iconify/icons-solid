import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx03ew4kg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fx03ew4kg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:archive-minus-filled"} {...others} />);
}

export default Component;

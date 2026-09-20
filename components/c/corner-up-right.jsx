import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ootsl4bzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ootsl4bzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:corner-up-right"} {...others} />);
}

export default Component;

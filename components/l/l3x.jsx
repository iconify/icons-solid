import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f46n3wgqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f46n3wgqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:l3x"} {...others} />);
}

export default Component;

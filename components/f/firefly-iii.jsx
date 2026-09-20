import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqcxcrapc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqcxcrapc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:firefly-iii"} {...others} />);
}

export default Component;

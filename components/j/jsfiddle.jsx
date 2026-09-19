import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rotb33b9k.css';

const viewBox = {"width":35,"height":24};
const content = `<path class="rotb33b9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:jsfiddle"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/venf5ntdo.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="venf5ntdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:wilderness-hut-14"} {...others} />);
}

export default Component;

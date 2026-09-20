import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhx05rsiw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rhx05rsiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alt-arrow-up-outline"} {...others} />);
}

export default Component;

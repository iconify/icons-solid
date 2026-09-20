import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v750lsb6j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v750lsb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spray-paint-can-with-spray"} {...others} />);
}

export default Component;

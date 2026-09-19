import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-89rbqjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x-89rbqjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:x-circle-filled"} {...others} />);
}

export default Component;

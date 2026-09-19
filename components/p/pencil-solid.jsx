import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jacn1v9zh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jacn1v9zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:pencil-solid"} {...others} />);
}

export default Component;

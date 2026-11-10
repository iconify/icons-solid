import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu_-1daos.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hu_-1daos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:epsilon"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/deq0jmbdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="deq0jmbdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-left-duo"} {...others} />);
}

export default Component;

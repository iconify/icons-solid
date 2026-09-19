import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh6x2fi-r.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vh6x2fi-r"/><path class="jor-usn7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-up-stroke-square"} {...others} />);
}

export default Component;

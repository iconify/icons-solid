import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jor-usn7v.css';
import '../../css/m/m473xkb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jor-usn7v"/><path class="m473xkb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:safe"} {...others} />);
}

export default Component;

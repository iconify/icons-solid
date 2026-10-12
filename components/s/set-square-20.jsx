import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqcluhbqi.css';
import '../../css/q/qn6jbqb-n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fqcluhbqi"/><path class="qn6jbqb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:set-square-20"} {...others} />);
}

export default Component;

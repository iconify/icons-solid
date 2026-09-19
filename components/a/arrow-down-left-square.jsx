import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1ecxxb0z.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n1ecxxb0z"/><path class="jor-usn7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-down-left-square"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c84qon53b.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c84qon53b"/><path class="jor-usn7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chevron-down-square"} {...others} />);
}

export default Component;

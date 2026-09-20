import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/beziji2lr.css';
import '../../css/a/a274jortb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="beziji2lr"/><path class="a274jortb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:fluid"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_o-wt13s.css';
import '../../css/j/jrfk4909t.css';
import '../../css/u/u23ewcsgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o_o-wt13s"/><path class="jrfk4909t"/><path class="u23ewcsgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-paper-bold-duotone"} {...others} />);
}

export default Component;

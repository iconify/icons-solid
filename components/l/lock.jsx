import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_diomx1n.css';
import '../../css/d/dki33cb-s.css';

const viewBox = {"width":42,"height":42};
const content = `<path class="o_diomx1n"/><path class="dki33cb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"topcoat:lock"} {...others} />);
}

export default Component;

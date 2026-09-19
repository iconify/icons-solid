import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obm7hd71g.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="obm7hd71g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:keycap-digit-zero-small"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwvk9yb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwvk9yb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:arrow-right-circle"} {...others} />);
}

export default Component;

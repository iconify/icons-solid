import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7l8-o35n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7l8-o35n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:currency-euro-circle"} {...others} />);
}

export default Component;

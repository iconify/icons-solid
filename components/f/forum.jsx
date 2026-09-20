import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am6292b6l.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="am6292b6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:forum"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq6c9gc0r.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="aq6c9gc0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:height"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufmo4-xzr.css';

const viewBox = {"width":1280,"height":1792};
const content = `<path class="ufmo4-xzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:id-badge"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivoyk3bek.css';
import '../../css/f/fmgf82-9s.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ivoyk3bek"/><path class="fmgf82-9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:compass-rose-n"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd6-kdbmf.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="nd6-kdbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:dolly"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbw0r8mbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rbw0r8mbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:bar-chart"} {...others} />);
}

export default Component;

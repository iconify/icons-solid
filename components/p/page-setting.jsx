import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyfdd-46b.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="gyfdd-46b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:page-setting"} {...others} />);
}

export default Component;

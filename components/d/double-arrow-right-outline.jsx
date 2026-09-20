import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mol7c5d1b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mol7c5d1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:double-arrow-right-outline"} {...others} />);
}

export default Component;

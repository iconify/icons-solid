import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkmxy1dof.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="qkmxy1dof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:repeat"} {...others} />);
}

export default Component;

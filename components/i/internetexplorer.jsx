import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4-zn3bud.css';

const viewBox = {"width":737,"height":729};
const content = `<path class="n4-zn3bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:internetexplorer"} {...others} />);
}

export default Component;

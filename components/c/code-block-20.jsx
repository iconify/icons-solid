import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co0vf9bvy.css';
import '../../css/a/ao9i_zcjw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="co0vf9bvy"/><path class="ao9i_zcjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:code-block-20"} {...others} />);
}

export default Component;

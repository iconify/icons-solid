import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-w1mof7v.css';
import '../../css/d/dod-re5li.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b-w1mof7v"/><path class="dod-re5li"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:code-block-20-bold"} {...others} />);
}

export default Component;

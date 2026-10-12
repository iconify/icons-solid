import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngyvkq8lm.css';
import '../../css/b/b5it182ov.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ngyvkq8lm"/><path class="b5it182ov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:person-circle-stroke-20"} {...others} />);
}

export default Component;

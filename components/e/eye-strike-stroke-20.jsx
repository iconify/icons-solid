import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byqstwb5i.css';
import '../../css/v/v83u78bsx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="byqstwb5i"/><path class="v83u78bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:eye-strike-stroke-20"} {...others} />);
}

export default Component;

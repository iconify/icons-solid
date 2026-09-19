import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3_gg71sm.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="q3_gg71sm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:chicken"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck8dsdbbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ck8dsdbbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:air-condition-open-line"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah9kv2bnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ah9kv2bnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-c-waves-solid"} {...others} />);
}

export default Component;

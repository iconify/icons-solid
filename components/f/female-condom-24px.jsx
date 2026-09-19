import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9oa2cb4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n9oa2cb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:female-condom-24px"} {...others} />);
}

export default Component;

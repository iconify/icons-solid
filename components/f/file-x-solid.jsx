import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz9-nx68p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz9-nx68p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:file-x-solid"} {...others} />);
}

export default Component;

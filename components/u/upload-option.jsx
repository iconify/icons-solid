import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h57zk-ypu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h57zk-ypu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:upload-option"} {...others} />);
}

export default Component;

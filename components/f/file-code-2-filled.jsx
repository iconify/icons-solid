import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsqm2vbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xsqm2vbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-code-2-filled"} {...others} />);
}

export default Component;

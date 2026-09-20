import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al9_oyb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="al9_oyb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-warning-fill"} {...others} />);
}

export default Component;

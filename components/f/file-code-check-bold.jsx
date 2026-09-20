import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eghypdl-x.css';
import '../../css/u/u79pk-b6p.css';
import '../../css/s/sxmjvi9qq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eghypdl-x"/><path class="u79pk-b6p"/><path class="sxmjvi9qq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:file-code-check-bold"} {...others} />);
}

export default Component;

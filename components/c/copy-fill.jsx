import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8a1lb6mn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c8a1lb6mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:copy-fill"} {...others} />);
}

export default Component;

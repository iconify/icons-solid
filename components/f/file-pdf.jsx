import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q49xl5b_p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q49xl5b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:file-pdf"} {...others} />);
}

export default Component;

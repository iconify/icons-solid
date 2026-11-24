import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8arqdb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e8arqdb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:carets-from-axis-dashed-vertical-filled"} {...others} />);
}

export default Component;

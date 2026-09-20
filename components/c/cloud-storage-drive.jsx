import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t800yyb2z.css';
import '../../css/e/e7w46bv7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t800yyb2z"/><path class="e7w46bv7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cloud-storage-drive"} {...others} />);
}

export default Component;

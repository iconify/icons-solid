import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dki-1w-8i.css';
import '../../css/z/z159gwm8o.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="dki-1w-8i"/><path class="z159gwm8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:china"} {...others} />);
}

export default Component;

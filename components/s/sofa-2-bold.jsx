import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6vyhu-he.css';
import '../../css/g/g_7c-1vki.css';
import '../../css/g/g97e8sbao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p6vyhu-he"/><path class="g_7c-1vki"/><path class="g97e8sbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-2-bold"} {...others} />);
}

export default Component;

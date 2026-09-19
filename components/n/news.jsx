import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p13ni4b9t.css';
import '../../css/n/n3vra2bpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p13ni4b9t"/><path class="n3vra2bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:news"} {...others} />);
}

export default Component;

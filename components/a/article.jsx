import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6nw9ybaa.css';
import '../../css/n/n3vra2bpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o6nw9ybaa"/><path class="n3vra2bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:article"} {...others} />);
}

export default Component;

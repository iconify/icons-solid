import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph994hqiv.css';
import '../../css/f/fcg7ob6nx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ph994hqiv"/><path class="fcg7ob6nx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:apartment"} {...others} />);
}

export default Component;

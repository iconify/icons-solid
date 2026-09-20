import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x25w2h7el.css';
import '../../css/s/s54zkcb4g.css';
import '../../css/y/yipyoybdp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x25w2h7el"/><path class="s54zkcb4g"/><path class="yipyoybdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-paginate-filter-music"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thkzaxbzw.css';
import '../../css/y/ytcirkb0g.css';
import '../../css/y/yekhwhkwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thkzaxbzw"/><path class="ytcirkb0g"/><path class="yekhwhkwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-plus-light"} {...others} />);
}

export default Component;

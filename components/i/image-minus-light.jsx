import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-zhl_bfp.css';
import '../../css/y/ytcirkb0g.css';
import '../../css/y/yekhwhkwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-zhl_bfp"/><path class="ytcirkb0g"/><path class="yekhwhkwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-minus-light"} {...others} />);
}

export default Component;

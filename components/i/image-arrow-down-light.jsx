import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytcirkb0g.css';
import '../../css/n/nctt2tb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytcirkb0g"/><path class="nctt2tb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-arrow-down-light"} {...others} />);
}

export default Component;

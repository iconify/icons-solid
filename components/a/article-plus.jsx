import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs85jub3t.css';
import '../../css/x/xs84k4bav.css';
import '../../css/n/n-c0l9fka.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bs85jub3t"/><path clip-rule="evenodd" class="xs84k4bav"/><path class="n-c0l9fka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-plus"} {...others} />);
}

export default Component;

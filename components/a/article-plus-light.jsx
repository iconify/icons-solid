import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5elhacbk.css';
import '../../css/n/na_x8vbwq.css';
import '../../css/f/f_pnwq58d.css';
import '../../css/a/ar8blrbfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5elhacbk"/><path class="na_x8vbwq"/><path clip-rule="evenodd" class="f_pnwq58d"/><path class="ar8blrbfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-plus-light"} {...others} />);
}

export default Component;

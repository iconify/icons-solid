import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5tparb-y.css';
import '../../css/n/na_x8vbwq.css';
import '../../css/o/oezn8xk0e.css';
import '../../css/w/wos6is2ia.css';
import '../../css/q/qer_0rbch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c5tparb-y"/><path class="na_x8vbwq"/><path clip-rule="evenodd" class="oezn8xk0e"/><path class="wos6is2ia"/><path clip-rule="evenodd" class="qer_0rbch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-share-light"} {...others} />);
}

export default Component;

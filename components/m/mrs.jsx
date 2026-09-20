import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoyo56b2a.css';
import '../../css/o/ogduviblr.css';
import '../../css/b/bx9w9rkcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xoyo56b2a"/><path class="ogduviblr"/><path class="bx9w9rkcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mrs"} {...others} />);
}

export default Component;

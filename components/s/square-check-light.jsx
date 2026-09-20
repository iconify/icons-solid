import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z--u7bblr.css';
import '../../css/k/kfpic71-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z--u7bblr"/><path class="kfpic71-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:square-check-light"} {...others} />);
}

export default Component;

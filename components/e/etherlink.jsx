import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxy5hxwwj.css';
import '../../css/b/b-ya-zbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxy5hxwwj"/><path class="b-ya-zbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:etherlink"} {...others} />);
}

export default Component;

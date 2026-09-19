import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/tmwvmdb1b.css';
import '../../css/l/ldk3krbjj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="tmwvmdb1b"/><path class="ldk3krbjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:send-one"} {...others} />);
}

export default Component;

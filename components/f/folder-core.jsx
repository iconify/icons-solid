import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch5-wbctd.css';
import '../../css/j/ja8mq8bvp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ch5-wbctd"/><path class="ja8mq8bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-core"} {...others} />);
}

export default Component;

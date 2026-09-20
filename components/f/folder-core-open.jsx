import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps-bh4bky.css';
import '../../css/j/ja8mq8bvp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ps-bh4bky"/><path class="ja8mq8bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-core-open"} {...others} />);
}

export default Component;

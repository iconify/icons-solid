import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps-bh4bky.css';
import '../../css/j/j9noiqajd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ps-bh4bky"/><path class="j9noiqajd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-quasar-open"} {...others} />);
}

export default Component;

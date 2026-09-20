import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch5-wbctd.css';
import '../../css/w/w71itubsu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ch5-wbctd"/><path class="w71itubsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-expo"} {...others} />);
}

export default Component;

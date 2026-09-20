import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhjw5tknw.css';
import '../../css/i/iph07lbhe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hhjw5tknw"/><path class="iph07lbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-generator-open"} {...others} />);
}

export default Component;

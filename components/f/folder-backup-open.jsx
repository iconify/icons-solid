import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjcbaabfa.css';
import '../../css/c/cgwih5znj.css';
import '../../css/c/cl_ajub-n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zjcbaabfa"/><path class="cgwih5znj"/><path class="cl_ajub-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-backup-open"} {...others} />);
}

export default Component;

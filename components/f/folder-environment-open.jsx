import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-fmsbcaz.css';
import '../../css/t/tpfmbf6bd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p-fmsbcaz"/><path class="tpfmbf6bd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-environment-open"} {...others} />);
}

export default Component;

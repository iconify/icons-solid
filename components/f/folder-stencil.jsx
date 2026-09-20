import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg1bwt3th.css';
import '../../css/c/cdocj7brz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kg1bwt3th"/><path class="cdocj7brz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-stencil"} {...others} />);
}

export default Component;

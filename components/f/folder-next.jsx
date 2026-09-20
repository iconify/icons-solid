import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dypv3-mdc.css';
import '../../css/o/ocb02aciv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dypv3-mdc"/><path class="ocb02aciv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-next"} {...others} />);
}

export default Component;

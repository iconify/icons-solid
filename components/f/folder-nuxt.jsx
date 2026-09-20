import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dypv3-mdc.css';
import '../../css/o/ov4bk74jf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dypv3-mdc"/><path class="ov4bk74jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-nuxt"} {...others} />);
}

export default Component;

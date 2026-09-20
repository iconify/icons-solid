import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkb61lbnd.css';
import '../../css/s/sx1789nbd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dkb61lbnd"/><path class="sx1789nbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-shared-open"} {...others} />);
}

export default Component;

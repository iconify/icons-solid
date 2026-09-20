import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpc9hgrvp.css';
import '../../css/b/bwv8_8upf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mpc9hgrvp"/><path class="bwv8_8upf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-coverage-open"} {...others} />);
}

export default Component;

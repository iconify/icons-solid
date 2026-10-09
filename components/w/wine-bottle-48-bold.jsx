import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw-mwgb5w.css';
import '../../css/w/wt36fcmmz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jw-mwgb5w"/><path class="wt36fcmmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wine-bottle-48-bold"} {...others} />);
}

export default Component;

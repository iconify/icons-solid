import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u48mzcbuj.css';
import '../../css/i/ijxvr0blg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u48mzcbuj"/><path class="ijxvr0blg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-constant-open"} {...others} />);
}

export default Component;

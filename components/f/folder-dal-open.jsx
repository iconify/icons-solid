import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpub25bol.css';
import '../../css/b/bngdwyyjd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kpub25bol"/><path class="bngdwyyjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-dal-open"} {...others} />);
}

export default Component;

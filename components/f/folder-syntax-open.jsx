import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixetddbeg.css';
import '../../css/z/z4tn2nb1x.css';
import '../../css/r/rysw60b-k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ixetddbeg"/><path class="z4tn2nb1x"/><path class="rysw60b-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-syntax-open"} {...others} />);
}

export default Component;

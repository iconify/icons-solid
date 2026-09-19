import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jknxtgxtf.css';
import '../../css/x/xf60uybiq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jknxtgxtf"/><path class="xf60uybiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-cargo-open"} {...others} />);
}

export default Component;

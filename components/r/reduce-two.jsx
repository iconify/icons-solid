import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbxmsfbue.css';
import '../../css/j/jnwbj5b5e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9SnDx6Nc"><g class="ft5dv1b6b"><rect class="fbxmsfbue"/><path class="jnwbj5b5e"/></g></mask></defs><path mask="url(#SVG9SnDx6Nc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:reduce-two"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xvheanbdf.css';
import '../../css/o/o7eettc6z.css';
import '../../css/e/e64091bwk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQe5MNbmL"><g class="wwvp95byt"><path class="xvheanbdf"/><path class="o7eettc6z"/><path class="e64091bwk"/></g></mask></defs><path mask="url(#SVGQe5MNbmL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:enter-key"} {...others} />);
}

export default Component;

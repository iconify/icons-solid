import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgga7abld.css';
import '../../css/s/si50jvboo.css';
import '../../css/b/bf_msp58c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhNHrpdRn"><g class="cgga7abld"><path class="si50jvboo"/><path class="bf_msp58c"/></g></mask></defs><path mask="url(#SVGhNHrpdRn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:wingsuit-flying"} {...others} />);
}

export default Component;

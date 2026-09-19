import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/u3q3edc-e.css';
import '../../css/x/xdeugs3mo.css';
import '../../css/g/gju2d528s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7oyAJcFi"><g class="wwvp95byt"><path class="u3q3edc-e"/><path class="xdeugs3mo"/><path class="gju2d528s"/></g></mask></defs><path mask="url(#SVG7oyAJcFi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:conditioner"} {...others} />);
}

export default Component;

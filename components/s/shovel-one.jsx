import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/n/nve97zbbq.css';
import '../../css/b/bzw5ayfte.css';
import '../../css/g/gheu1bblx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8BgdeebD"><g class="gopnm44um"><path class="nve97zbbq"/><path class="bzw5ayfte"/><path class="gheu1bblx"/></g></mask></defs><path mask="url(#SVG8BgdeebD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shovel-one"} {...others} />);
}

export default Component;

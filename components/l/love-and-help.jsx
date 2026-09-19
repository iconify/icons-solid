import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fwtn4-ygl.css';
import '../../css/w/who9pkbgi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNNz1NbAg"><g class="wwvp95byt"><path class="fwtn4-ygl"/><path class="who9pkbgi"/></g></mask></defs><path mask="url(#SVGNNz1NbAg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:love-and-help"} {...others} />);
}

export default Component;

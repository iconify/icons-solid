import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/n/nfncz0b5x.css';
import '../../css/l/llqfild5y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpT6hzdOH"><g class="ylrso7y3c"><path class="nfncz0b5x"/><path class="llqfild5y"/></g></mask></defs><path mask="url(#SVGpT6hzdOH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:config"} {...others} />);
}

export default Component;

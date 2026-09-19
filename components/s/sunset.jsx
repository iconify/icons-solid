import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/z-c_926fb.css';
import '../../css/v/vca6n0zbn.css';
import '../../css/g/g339bdcuq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1PpcFd7B"><g class="rohhhzb0l"><path class="z-c_926fb"/><path class="vca6n0zbn"/><circle class="g339bdcuq"/></g></mask></defs><path mask="url(#SVG1PpcFd7B)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sunset"} {...others} />);
}

export default Component;

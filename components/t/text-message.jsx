import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/j/jlgcvxb3p.css';
import '../../css/o/osl6cdcam.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6D619boH"><g class="gopnm44um"><path class="jlgcvxb3p"/><path class="osl6cdcam"/></g></mask></defs><path mask="url(#SVG6D619boH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:text-message"} {...others} />);
}

export default Component;

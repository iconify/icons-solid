import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/c/c8jtaacin.css';
import '../../css/u/urwv5eb3p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTFa8SbBO"><g class="wwvp95byt"><path class="c8jtaacin"/><path class="urwv5eb3p"/></g></mask></defs><path mask="url(#SVGTFa8SbBO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:message"} {...others} />);
}

export default Component;

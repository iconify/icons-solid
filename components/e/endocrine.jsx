import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/o/oxrrerb7b.css';
import '../../css/j/j37pifb9j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPdFqZdEC"><g class="ylrso7y3c"><path clip-rule="evenodd" class="oxrrerb7b"/><path class="j37pifb9j"/></g></mask></defs><path mask="url(#SVGPdFqZdEC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:endocrine"} {...others} />);
}

export default Component;

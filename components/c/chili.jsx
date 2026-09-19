import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/g6dwbdozf.css';
import '../../css/b/b33ifqbsd.css';
import '../../css/g/gtgxb9p8u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGx0Jgvc0C"><g class="rohhhzb0l"><path class="g6dwbdozf"/><path class="b33ifqbsd"/><path class="gtgxb9p8u"/></g></mask></defs><path mask="url(#SVGx0Jgvc0C)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chili"} {...others} />);
}

export default Component;

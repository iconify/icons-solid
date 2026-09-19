import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgga7abld.css';
import '../../css/y/ya8s-gi3v.css';
import '../../css/b/b8c_z7brc.css';
import '../../css/j/j-dpmubjz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGluDhlemK"><g class="cgga7abld"><path class="ya8s-gi3v"/><path class="b8c_z7brc"/><path class="j-dpmubjz"/></g></mask></defs><path mask="url(#SVGluDhlemK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:kungfu"} {...others} />);
}

export default Component;

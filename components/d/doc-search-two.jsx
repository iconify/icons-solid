import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0ebj98gu.css';
import '../../css/j/jlin40zen.css';
import '../../css/n/nglwwbzdo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiChrWclO"><g class="ft5dv1b6b"><path class="o0ebj98gu"/><path class="jlin40zen"/><path class="nglwwbzdo"/></g></mask></defs><path mask="url(#SVGiChrWclO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:doc-search-two"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/fsq5llu2n.css';
import '../../css/t/tvoazbbvq.css';
import '../../css/f/fw-lfobsd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdA4qbe1y"><g class="s9cl3zbei"><path class="fsq5llu2n"/><path class="tvoazbbvq"/><path class="fw-lfobsd"/></g></mask></defs><path mask="url(#SVGdA4qbe1y)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:light-member"} {...others} />);
}

export default Component;

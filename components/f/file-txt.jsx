import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/if55a7bnz.css';
import '../../css/e/e-oh7bbgy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8z9Kecla"><g class="rohhhzb0l"><path class="if55a7bnz"/><path class="e-oh7bbgy"/></g></mask></defs><path mask="url(#SVG8z9Kecla)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-txt"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_ete1bey.css';
import '../../css/y/y3oe5tbyg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxMLkdchm"><g class="rohhhzb0l"><circle class="a_ete1bey"/><path class="y3oe5tbyg"/></g></mask></defs><path mask="url(#SVGxMLkdchm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:delete-three"} {...others} />);
}

export default Component;

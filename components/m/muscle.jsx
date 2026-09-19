import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8vwyjb2z.css';
import '../../css/l/lj_j-gbbi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG32PdTd8v"><g class="ft5dv1b6b"><path class="g8vwyjb2z"/><path class="lj_j-gbbi"/></g></mask></defs><path mask="url(#SVG32PdTd8v)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:muscle"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csw0kbbpv.css';
import '../../css/s/sgw7h0bny.css';
import '../../css/s/sul83f9ve.css';
import '../../css/o/obbrti2nr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAND8ZcBU"><g class="csw0kbbpv"><path class="sgw7h0bny"/><path class="sul83f9ve"/><path class="obbrti2nr"/></g></mask></defs><path mask="url(#SVGAND8ZcBU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clear-format"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/detz96luf.css';
import '../../css/p/pgcwh7bgt.css';
import '../../css/z/zkkpd6bxz.css';
import '../../css/e/errurjr8u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcqFWdc4t"><g class="rohhhzb0l"><circle class="detz96luf"/><path class="pgcwh7bgt"/><circle transform="rotate(-180 11 31)" class="zkkpd6bxz"/><path class="errurjr8u"/></g></mask></defs><path mask="url(#SVGcqFWdc4t)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cancer"} {...others} />);
}

export default Component;

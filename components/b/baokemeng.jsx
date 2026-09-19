import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4e4mlb2g.css';
import '../../css/y/y_tem0t5u.css';
import '../../css/u/ul1worher.css';
import '../../css/l/llqfild5y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGecX1IdzB"><g class="u4e4mlb2g"><path class="y_tem0t5u"/><path class="ul1worher"/><path class="llqfild5y"/></g></mask></defs><path mask="url(#SVGecX1IdzB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:baokemeng"} {...others} />);
}

export default Component;

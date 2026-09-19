import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/d/dkty4hkoy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsYVqsbct"><g class="rohhhzb0l"><rect class="h9qj9o6mz"/><path class="dkty4hkoy"/></g></mask></defs><path mask="url(#SVGsYVqsbct)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:excel-one"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/ta62fdbqc.css';
import '../../css/v/vyiw8snfv.css';
import '../../css/w/w-54a5wuc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjmFIOcmb"><g class="rohhhzb0l"><rect class="ta62fdbqc"/><path class="vyiw8snfv"/><rect class="w-54a5wuc"/></g></mask></defs><path mask="url(#SVGjmFIOcmb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:seo"} {...others} />);
}

export default Component;

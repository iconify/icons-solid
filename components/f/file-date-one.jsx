import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/ftpkt8zyt.css';
import '../../css/w/w54428b0o.css';
import '../../css/r/ru9wejb0k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcv6GGdJE"><g class="rohhhzb0l"><path class="ftpkt8zyt"/><circle class="w54428b0o"/><path class="ru9wejb0k"/></g></mask></defs><path mask="url(#SVGcv6GGdJE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-date-one"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/kq-ex-9vh.css';
import '../../css/o/owyx67boc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEtuFMe3c"><g class="rohhhzb0l"><path class="kq-ex-9vh"/><path class="owyx67boc"/></g></mask></defs><path mask="url(#SVGEtuFMe3c)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:swimming-ring"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/p_lhn1bcu.css';
import '../../css/i/iyyirubqr.css';
import '../../css/g/g3kkxobsr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGen6H1bAc"><g class="wwvp95byt"><rect class="p_lhn1bcu"/><path class="iyyirubqr"/><path class="g3kkxobsr"/></g></mask></defs><path mask="url(#SVGen6H1bAc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:trunk"} {...others} />);
}

export default Component;

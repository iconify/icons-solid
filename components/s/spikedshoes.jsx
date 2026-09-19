import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqznn1ydc.css';
import '../../css/r/rylpg2bjs.css';
import '../../css/n/nvhce-17r.css';
import '../../css/h/h4w5yibsn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2xp85cjc"><g class="wqznn1ydc"><path class="rylpg2bjs"/><path class="nvhce-17r"/><path class="h4w5yibsn"/></g></mask></defs><path mask="url(#SVG2xp85cjc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:spikedshoes"} {...others} />);
}

export default Component;

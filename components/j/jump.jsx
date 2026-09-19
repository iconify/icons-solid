import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/d6abn8_hs.css';
import '../../css/v/v_mrg_w2s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUylMkdVc"><g class="rohhhzb0l"><path class="d6abn8_hs"/><circle class="v_mrg_w2s"/></g></mask></defs><path mask="url(#SVGUylMkdVc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:jump"} {...others} />);
}

export default Component;

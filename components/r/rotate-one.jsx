import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/fl1u8-q9v.css';
import '../../css/y/yhbg_db3j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtXmfHeeC"><g class="rohhhzb0l"><path class="fl1u8-q9v"/><circle class="yhbg_db3j"/></g></mask></defs><path mask="url(#SVGtXmfHeeC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rotate-one"} {...others} />);
}

export default Component;

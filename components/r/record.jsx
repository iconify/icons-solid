import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/s9tz2zumz.css';
import '../../css/i/i1b443bkt.css';
import '../../css/g/gilfwhj-b.css';
import '../../css/y/yjv45b33a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsbUJ6bai"><g class="v3_i3wktz"><rect class="s9tz2zumz"/><path class="i1b443bkt"/><path class="gilfwhj-b"/><path class="yjv45b33a"/></g></mask></defs><path mask="url(#SVGsbUJ6bai)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:record"} {...others} />);
}

export default Component;

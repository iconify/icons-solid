import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/q/qseas_bes.css';
import '../../css/v/ve4z9yd-u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQx4w4bZK"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="qseas_bes"/><path class="ve4z9yd-u"/></g></mask></defs><path mask="url(#SVGQx4w4bZK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:f-nine-key"} {...others} />);
}

export default Component;

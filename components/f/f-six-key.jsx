import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/v/v0sklzfxn.css';
import '../../css/d/dhap0cc7v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJW0n2dsX"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="v0sklzfxn"/><path class="dhap0cc7v"/></g></mask></defs><path mask="url(#SVGJW0n2dsX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:f-six-key"} {...others} />);
}

export default Component;

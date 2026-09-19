import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j_wfchbkt.css';
import '../../css/k/kuaez8b4u.css';
import '../../css/l/lax_2acvz.css';
import '../../css/n/n1ef3ephg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGs8QpjdIV"><g class="wwvp95byt"><path class="j_wfchbkt"/><path class="kuaez8b4u"/><circle class="lax_2acvz"/><path class="n1ef3ephg"/></g></mask></defs><path mask="url(#SVGs8QpjdIV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:passport"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/uvawkc25s.css';
import '../../css/e/evf4b5b-g.css';
import '../../css/r/ryz5fzavy.css';
import '../../css/d/dev36dbly.css';
import '../../css/k/k-f7kk-gp.css';
import '../../css/v/v4p6uubht.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2puEUcmy"><g class="wwvp95byt"><path class="uvawkc25s"/><path class="evf4b5b-g"/><path class="ryz5fzavy"/><circle class="dev36dbly"/><circle class="k-f7kk-gp"/><path class="v4p6uubht"/></g></mask></defs><path mask="url(#SVG2puEUcmy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:type-drive"} {...others} />);
}

export default Component;

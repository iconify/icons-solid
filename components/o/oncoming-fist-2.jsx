import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvgdpzb2e.css';
import '../../css/z/zwk9pwjve.css';
import '../../css/t/tole7g8rg.css';
import '../../css/g/gtdnn0bvx.css';
import '../../css/n/nwr7g7mfc.css';
import '../../css/u/uwa6vopby.css';
import '../../css/h/hswnvybat.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yvgdpzb2e"/><path class="zwk9pwjve"/><path class="tole7g8rg"/><path class="gtdnn0bvx"/><path class="nwr7g7mfc"/><path class="uwa6vopby"/><path class="hswnvybat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:oncoming-fist-2"} {...others} />);
}

export default Component;

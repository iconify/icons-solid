import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlerm3brg.css';
import '../../css/m/mgar0-gjb.css';
import '../../css/z/zmfqa13ae.css';
import '../../css/p/puphvnb0h.css';
import '../../css/i/idjc4pbow.css';
import '../../css/l/lkzo6fybb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hlerm3brg"/><path class="mgar0-gjb"/><path class="zmfqa13ae"/><path class="puphvnb0h"/><path class="idjc4pbow"/><path class="lkzo6fybb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bug"} {...others} />);
}

export default Component;

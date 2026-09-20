import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qycdp5wme.css';
import '../../css/c/cv374gbbn.css';
import '../../css/q/qyyjkuffo.css';
import '../../css/q/qe4t1tbur.css';
import '../../css/j/jcb3a8bxd.css';
import '../../css/i/igfu8lvnp.css';
import '../../css/y/ya4unvbhv.css';
import '../../css/c/cwc7vqu8d.css';
import '../../css/q/qt8z5obvn.css';
import '../../css/d/d7hebzprr.css';
import '../../css/i/iowhaezjs.css';
import '../../css/w/wqf9c1h9f.css';
import '../../css/m/mjikvgbjo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qycdp5wme"/><path class="cv374gbbn"/><path class="qyyjkuffo"/><path class="qe4t1tbur"/><path class="jcb3a8bxd"/><path class="igfu8lvnp"/><path class="ya4unvbhv"/><path class="cwc7vqu8d"/><path class="qt8z5obvn"/><path class="d7hebzprr"/><path class="iowhaezjs"/><path class="wqf9c1h9f"/><path class="mjikvgbjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:girl-3"} {...others} />);
}

export default Component;

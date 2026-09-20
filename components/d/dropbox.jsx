import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d5ty4n4pr.css';
import '../../css/t/t8skbbclz.css';
import '../../css/h/hznx0qfvz.css';
import '../../css/b/bprinxb1z.css';
import '../../css/t/tn8qf8b5k.css';
import '../../css/d/dze7ft-ab.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d5ty4n4pr"/><path class="t8skbbclz"/><path class="hznx0qfvz"/><path class="bprinxb1z"/><path class="tn8qf8b5k"/><path class="dze7ft-ab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dropbox"} {...others} />);
}

export default Component;

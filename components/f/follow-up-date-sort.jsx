import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/z/z8rqlrb4w.css';
import '../../css/s/s2p4zacxn.css';
import '../../css/o/oyh43sbch.css';
import '../../css/n/n_nitbb9i.css';
import '../../css/z/zbkq-vblj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="z8rqlrb4w"/><path class="s2p4zacxn"/><path class="oyh43sbch"/><path class="n_nitbb9i"/><path class="zbkq-vblj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:follow-up-date-sort"} {...others} />);
}

export default Component;

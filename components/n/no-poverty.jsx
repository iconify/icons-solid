import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/ke5971b1l.css';
import '../../css/k/ksjhohv9e.css';
import '../../css/v/v8_iw925n.css';
import '../../css/m/mtdud7bez.css';
import '../../css/z/zl3sa_iyr.css';
import '../../css/w/w3qw9cb4w.css';
import '../../css/i/ievmyc2zi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ke5971b1l"/><path class="ksjhohv9e"/><path class="v8_iw925n"/><path class="mtdud7bez"/><path class="zl3sa_iyr"/><path class="w3qw9cb4w"/><path class="ievmyc2zi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:no-poverty"} {...others} />);
}

export default Component;

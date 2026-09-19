import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/h9oaxvcra.css';
import '../../css/g/gjec0m8na.css';
import '../../css/n/n90lmotbw.css';
import '../../css/z/zg6igub2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="h9oaxvcra"/><circle class="gjec0m8na"/><circle class="n90lmotbw"/><rect class="zg6igub2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:dice-outline"} {...others} />);
}

export default Component;

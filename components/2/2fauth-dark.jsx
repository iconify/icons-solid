import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/a/avhbh1bya.css';
import '../../css/a/ak_8e2pht.css';

const viewBox = {"width":41.63,"height":57.198};
const content = `<g class="n1mjunbsu"><path class="avhbh1bya"/><path class="ak_8e2pht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:2fauth-dark"} {...others} />);
}

export default Component;

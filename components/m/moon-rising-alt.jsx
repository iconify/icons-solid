import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n707we.css';
import '../../css/u/ufposl.css';
import '../../css/m/m9pw2i.css';
import '../../css/u/ubmjts.css';
import '../../css/e/eyuyvm.css';
import '../../css/b/bmy0qq.css';
import '../../css/d/d-k-hl-x.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n707we ufposl"/><path class="m9pw2i ubmjts ufposl"/><path class="eyuyvm m9pw2i ufposl"/><path class="bmy0qq m9pw2i ufposl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:moon-rising-alt"} {...others} />);
}

export default Component;

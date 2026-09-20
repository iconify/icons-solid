import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/nhdm6wmar.css';
import '../../css/a/aa7sjfs7a.css';
import '../../css/s/sj1zgv4na.css';
import '../../css/d/du2493bik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="nhdm6wmar"/><path class="aa7sjfs7a"/><path class="sj1zgv4na"/><path class="du2493bik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:alien"} {...others} />);
}

export default Component;

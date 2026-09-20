import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/a/aukdz5b-j.css';
import '../../css/g/gzmhkdb5e.css';
import '../../css/u/utwclnbod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="aukdz5b-j"/><path class="gzmhkdb5e"/><path class="utwclnbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:apple"} {...others} />);
}

export default Component;

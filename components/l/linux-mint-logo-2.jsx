import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m-nuw3bni.css';
import '../../css/q/qdgi0le6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="m-nuw3bni"/><path class="qdgi0le6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:linux-mint-logo-2"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wefv-0bjb.css';
import '../../css/z/zm0iaj-bn.css';
import '../../css/t/td4s3td9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wefv-0bjb"/><path class="zm0iaj-bn"/><path class="td4s3td9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:sword-attack"} {...others} />);
}

export default Component;

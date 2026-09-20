import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/sk0wnfbnl.css';
import '../../css/n/nm1r7abzv.css';
import '../../css/z/ztvw850qf.css';
import '../../css/b/bjd1nd6un.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="sk0wnfbnl"/><path class="nm1r7abzv"/><path class="ztvw850qf"/><path class="bjd1nd6un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:store-2"} {...others} />);
}

export default Component;

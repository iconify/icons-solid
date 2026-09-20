import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/c56xify9v.css';
import '../../css/l/lbzlphtuc.css';
import '../../css/c/cu5kcibki.css';
import '../../css/w/wwf4w80fx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="c56xify9v"/><path class="lbzlphtuc"/><path class="cu5kcibki"/><path class="wwf4w80fx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:image-saturation"} {...others} />);
}

export default Component;

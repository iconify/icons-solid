import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/ca9vtgb1k.css';
import '../../css/b/bjuwydbpd.css';
import '../../css/k/k06y8zcgv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ca9vtgb1k"/><path class="bjuwydbpd"/><path class="k06y8zcgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:escalator-up"} {...others} />);
}

export default Component;

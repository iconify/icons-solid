import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/sy1nkmmcc.css';
import '../../css/p/phhmyrtui.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="sy1nkmmcc"/><path class="phhmyrtui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:sunset"} {...others} />);
}

export default Component;

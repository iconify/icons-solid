import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_xc1ipka.css';
import '../../css/s/s_9tx4b8m.css';
import '../../css/o/ocght-rxa.css';
import '../../css/p/pfa7brbym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_xc1ipka"/><path class="s_9tx4b8m"/><path clip-rule="evenodd" class="ocght-rxa"/><path class="pfa7brbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sandstorm-fill"} {...others} />);
}

export default Component;

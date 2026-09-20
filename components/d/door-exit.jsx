import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/h2ji8u6xo.css';
import '../../css/h/h622xdb4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="h2ji8u6xo"/><path class="h622xdb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:door-exit"} {...others} />);
}

export default Component;

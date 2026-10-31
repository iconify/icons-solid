import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/z/z627u3b-c.css';
import '../../css/b/blbhasgtz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="z627u3b-c"/><path class="blbhasgtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pen-pop"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/akztulxao.css';
import '../../css/i/ie61plbol.css';
import '../../css/c/cma6q9u3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="akztulxao"/><path class="ie61plbol"/><path class="cma6q9u3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:gauge"} {...others} />);
}

export default Component;

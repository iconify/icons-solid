import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fn3g3ebng.css';
import '../../css/e/enrflx9dd.css';
import '../../css/g/gtw2eeblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="fn3g3ebng"/><path class="enrflx9dd"/><path class="gtw2eeblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:log-in"} {...others} />);
}

export default Component;

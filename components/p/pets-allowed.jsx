import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/a/ay62w7b1g.css';
import '../../css/y/yo_9pkbyv.css';
import '../../css/l/lcb3-wbbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ay62w7b1g"/><path class="yo_9pkbyv"/><path class="lcb3-wbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pets-allowed"} {...others} />);
}

export default Component;

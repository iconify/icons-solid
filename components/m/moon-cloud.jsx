import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/b1w1cvb7l.css';
import '../../css/g/gqmsu3x6a.css';
import '../../css/q/qjdm5_0qw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="b1w1cvb7l"/><path class="gqmsu3x6a"/><path class="qjdm5_0qw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:moon-cloud"} {...others} />);
}

export default Component;

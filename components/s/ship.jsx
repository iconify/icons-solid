import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/v3brqrbzt.css';
import '../../css/y/y5tfrfkbk.css';
import '../../css/h/h2vzftbvs.css';
import '../../css/t/tk9p-_bdg.css';
import '../../css/b/bxooqnwiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="v3brqrbzt"/><path class="y5tfrfkbk"/><path class="h2vzftbvs"/><path class="tk9p-_bdg"/><path class="bxooqnwiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ship"} {...others} />);
}

export default Component;

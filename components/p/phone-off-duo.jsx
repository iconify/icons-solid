import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/icebpjgqg.css';
import '../../css/k/k9yaaohqa.css';
import '../../css/z/znt-8tb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="icebpjgqg"/><path class="k9yaaohqa wm-s"/><path class="znt-8tb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-off-duo"} {...others} />);
}

export default Component;

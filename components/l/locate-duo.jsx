import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7jdrob8h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zebndbubb.css';
import '../../css/q/q9-8gobaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary z7jdrob8h"/><g class="dt0cm9dhy primary"><circle class="zebndbubb"/><path class="q9-8gobaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:locate-duo"} {...others} />);
}

export default Component;

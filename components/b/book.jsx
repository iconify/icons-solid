import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqzflwbuc.css';
import '../../css/o/o1pfvqbir.css';
import '../../css/g/gscq0clul.css';
import '../../css/o/orseybccy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqzflwbuc"/><path class="o1pfvqbir"/><path class="gscq0clul"/><path class="orseybccy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:book"} {...others} />);
}

export default Component;

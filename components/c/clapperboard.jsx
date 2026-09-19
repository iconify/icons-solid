import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvowzcblg.css';
import '../../css/l/ljexf9bnd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer kvowzcblg"/><path class="duoicon-primary-layer ljexf9bnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:clapperboard"} {...others} />);
}

export default Component;

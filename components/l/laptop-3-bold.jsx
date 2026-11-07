import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_78m3epb.css';
import '../../css/c/cq7nq2bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_78m3epb"/><path class="cq7nq2bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-3-bold"} {...others} />);
}

export default Component;

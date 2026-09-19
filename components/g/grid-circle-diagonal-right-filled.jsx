import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3ehty72y.css';
import '../../css/n/neukm1fuz.css';
import '../../css/g/gtn46m-jg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d3ehty72y"/><rect class="neukm1fuz"/><rect class="gtn46m-jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:grid-circle-diagonal-right-filled"} {...others} />);
}

export default Component;

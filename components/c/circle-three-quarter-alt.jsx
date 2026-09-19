import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt6wxsl1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xt6wxsl1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:circle-three-quarter-alt"} {...others} />);
}

export default Component;

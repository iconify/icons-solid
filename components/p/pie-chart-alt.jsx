import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9-r9rubz.css';
import '../../css/e/e451rm0tl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9-r9rubz"/><path class="e451rm0tl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pie-chart-alt"} {...others} />);
}

export default Component;

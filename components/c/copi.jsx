import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awxbmobeb.css';
import '../../css/u/utdolccoj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="awxbmobeb"/><path class="utdolccoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:copi"} {...others} />);
}

export default Component;

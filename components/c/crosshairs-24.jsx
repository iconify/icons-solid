import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsw5tr2lt.css';
import '../../css/i/ig6m21bsl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hsw5tr2lt"/><path class="ig6m21bsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:crosshairs-24"} {...others} />);
}

export default Component;

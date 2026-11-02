import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sal6xlgzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sal6xlgzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:snowboarding-fill"} {...others} />);
}

export default Component;

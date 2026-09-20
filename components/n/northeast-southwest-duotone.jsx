import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfndtr6jn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bfndtr6jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:northeast-southwest-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmf4z0u-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xmf4z0u-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-return-sharp"} {...others} />);
}

export default Component;

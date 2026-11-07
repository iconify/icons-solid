import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0nhpsynn.css';
import '../../css/b/bxpukbbcg.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="f0nhpsynn"/><path class="bxpukbbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-bold-duotone"} {...others} />);
}

export default Component;

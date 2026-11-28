import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0e2h4bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary z0e2h4bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:triangle-dashed-duotone"} {...others} />);
}

export default Component;

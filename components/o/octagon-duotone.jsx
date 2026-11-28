import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-_z_3qcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b-_z_3qcg primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:octagon-duotone"} {...others} />);
}

export default Component;

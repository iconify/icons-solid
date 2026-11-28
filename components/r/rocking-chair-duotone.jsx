import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glxq3du-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="glxq3du-m primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:rocking-chair-duotone"} {...others} />);
}

export default Component;

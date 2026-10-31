import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amim8fd2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="amim8fd2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-u-turn-left-up-duotone-round"} {...others} />);
}

export default Component;

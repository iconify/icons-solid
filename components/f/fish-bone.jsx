import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mscfj9vem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mscfj9vem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:fish-bone"} {...others} />);
}

export default Component;

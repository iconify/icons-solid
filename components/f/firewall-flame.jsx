import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkz3ovj8f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zkz3ovj8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:firewall-flame"} {...others} />);
}

export default Component;

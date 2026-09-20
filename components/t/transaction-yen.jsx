import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imv8u3_9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="imv8u3_9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:transaction-yen"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlxe_2blb.css';
import '../../css/v/viv7oac8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dlxe_2blb"/><path class="viv7oac8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:credit-card-insert"} {...others} />);
}

export default Component;

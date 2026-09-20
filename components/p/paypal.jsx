import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5rg4yowh.css';
import '../../css/n/nexfdi4-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s5rg4yowh"/><path class="nexfdi4-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:paypal"} {...others} />);
}

export default Component;

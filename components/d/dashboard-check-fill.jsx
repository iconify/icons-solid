import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fa0sf7bje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fa0sf7bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dashboard-check-fill"} {...others} />);
}

export default Component;

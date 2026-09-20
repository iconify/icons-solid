import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uei7otwae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uei7otwae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dashboard-3-fill"} {...others} />);
}

export default Component;

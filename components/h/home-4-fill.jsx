import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi19z5bud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oi19z5bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:home-4-fill"} {...others} />);
}

export default Component;

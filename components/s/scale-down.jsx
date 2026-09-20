import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uidk0bb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uidk0bb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:scale-down"} {...others} />);
}

export default Component;

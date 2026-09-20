import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbl-9e6zb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fbl-9e6zb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:zoom-in-fill"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w76g3kfom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w76g3kfom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-cancel"} {...others} />);
}

export default Component;

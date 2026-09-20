import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5f-44bvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5f-44bvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:scale-up"} {...others} />);
}

export default Component;

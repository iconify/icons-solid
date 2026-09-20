import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzq4r8brf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dzq4r8brf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:youtube"} {...others} />);
}

export default Component;

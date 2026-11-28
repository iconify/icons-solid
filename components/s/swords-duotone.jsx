import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n05sznbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n05sznbcj primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:swords-duotone"} {...others} />);
}

export default Component;

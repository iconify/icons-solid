import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm7w5bbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gm7w5bbqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:pool-clorine"} {...others} />);
}

export default Component;

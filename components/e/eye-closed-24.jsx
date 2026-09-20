import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szb27ezbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szb27ezbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:eye-closed-24"} {...others} />);
}

export default Component;

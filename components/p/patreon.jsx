import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2czq3bqk.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};
const content = `<path class="x2czq3bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:patreon"} {...others} />);
}

export default Component;

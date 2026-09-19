import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gen1u6ueu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gen1u6ueu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:roborock-logo"} {...others} />);
}

export default Component;

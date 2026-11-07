import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghfixm1dc.css';
import '../../css/j/jq-gf3byy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ghfixm1dc"/><path class="jq-gf3byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-alt-arrow-down-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m747jmphf.css';
import '../../css/x/xvqdfg4fc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m747jmphf"/><path class="xvqdfg4fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:check-shield"} {...others} />);
}

export default Component;

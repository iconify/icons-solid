import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m747jmphf.css';
import '../../css/x/x7e247bcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m747jmphf"/><path class="x7e247bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:alert-shield"} {...others} />);
}

export default Component;

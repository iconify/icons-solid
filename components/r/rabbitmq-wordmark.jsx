import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u86l3ccfz.css';
import '../../css/b/b8bh25bgv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u86l3ccfz"/><path class="b8bh25bgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:rabbitmq-wordmark"} {...others} />);
}

export default Component;

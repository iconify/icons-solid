import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqh3q-bpi.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="vqh3q-bpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:checker-small"} {...others} />);
}

export default Component;

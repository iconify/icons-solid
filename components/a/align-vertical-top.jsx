import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uduo2dspc.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="uduo2dspc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:align-vertical-top"} {...others} />);
}

export default Component;

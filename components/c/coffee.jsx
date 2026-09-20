import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqd9fbcab.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="mqd9fbcab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:coffee"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1guqyk7u.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="h1guqyk7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:compass-north-east"} {...others} />);
}

export default Component;

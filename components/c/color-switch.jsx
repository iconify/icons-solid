import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0vf9m35x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="u0vf9m35x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:color-switch"} {...others} />);
}

export default Component;

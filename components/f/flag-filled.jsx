import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtjwq6hha.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mtjwq6hha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flag-filled"} {...others} />);
}

export default Component;

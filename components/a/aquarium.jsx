import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxa23ha5t.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="uxa23ha5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:aquarium"} {...others} />);
}

export default Component;

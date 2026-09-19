import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9xnn3bsa.css';

const viewBox = {"width":15,"height":24};
const content = `<path class="g9xnn3bsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:inr"} {...others} />);
}

export default Component;

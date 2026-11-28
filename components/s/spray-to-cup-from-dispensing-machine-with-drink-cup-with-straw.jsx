import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnb4t44ek.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wnb4t44ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spray-to-cup-from-dispensing-machine-with-drink-cup-with-straw"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmxrdnbaj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hmxrdnbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:flag-vertical-triband"} {...others} />);
}

export default Component;

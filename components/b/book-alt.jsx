import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erqsdj16a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="erqsdj16a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:book-alt"} {...others} />);
}

export default Component;

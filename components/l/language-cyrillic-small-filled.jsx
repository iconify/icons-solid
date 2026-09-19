import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge4bctbsq.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ge4bctbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:language-cyrillic-small-filled"} {...others} />);
}

export default Component;

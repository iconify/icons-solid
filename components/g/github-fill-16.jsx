import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goo9ribrt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="goo9ribrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:github-fill-16"} {...others} />);
}

export default Component;

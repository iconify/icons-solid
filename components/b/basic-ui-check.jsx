import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f97xkqb-s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f97xkqb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-check"} {...others} />);
}

export default Component;

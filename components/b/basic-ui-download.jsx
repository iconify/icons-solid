import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdhdnennk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hdhdnennk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-download"} {...others} />);
}

export default Component;

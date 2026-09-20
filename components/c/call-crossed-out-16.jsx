import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ura_37b8i.css';
import '../../css/y/y71wou8xx.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ura_37b8i"/><path class="y71wou8xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:call-crossed-out-16"} {...others} />);
}

export default Component;

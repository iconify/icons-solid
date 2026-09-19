import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukh96f2tw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ukh96f2tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:slash-square-fill"} {...others} />);
}

export default Component;

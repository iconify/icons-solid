import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i43ht4usc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i43ht4usc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:plug-fill"} {...others} />);
}

export default Component;

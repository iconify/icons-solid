import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa0jeacgd.css';
import '../../css/m/m9dh1gapn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qa0jeacgd"/><path class="m9dh1gapn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-organic-sun-growth"} {...others} />);
}

export default Component;

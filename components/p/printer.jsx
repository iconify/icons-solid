import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-n99mbgf.css';
import '../../css/a/atk21rbkq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f-n99mbgf"/><ellipse class="atk21rbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:printer"} {...others} />);
}

export default Component;

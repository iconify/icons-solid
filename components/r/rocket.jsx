import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay0q8wp0f.css';
import '../../css/v/v6k4kxbiv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ay0q8wp0f"/><path class="v6k4kxbiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:rocket"} {...others} />);
}

export default Component;

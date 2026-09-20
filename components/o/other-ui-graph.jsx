import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgsklfbyu.css';
import '../../css/d/d516lezif.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rgsklfbyu"/><path class="d516lezif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-graph"} {...others} />);
}

export default Component;

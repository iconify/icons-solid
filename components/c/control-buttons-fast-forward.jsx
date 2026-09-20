import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spw8_85nj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="spw8_85nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:control-buttons-fast-forward"} {...others} />);
}

export default Component;

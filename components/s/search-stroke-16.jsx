import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zstbz94ff.css';
import '../../css/e/ep6g36qhy.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="zstbz94ff"/><path class="ep6g36qhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:search-stroke-16"} {...others} />);
}

export default Component;

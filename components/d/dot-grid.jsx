import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj5h5m4vp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="yj5h5m4vp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:dot-grid"} {...others} />);
}

export default Component;

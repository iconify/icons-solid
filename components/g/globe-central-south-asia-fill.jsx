import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcc-cbb7t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jcc-cbb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:globe-central-south-asia-fill"} {...others} />);
}

export default Component;

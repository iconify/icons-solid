import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3d5r3obd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s3d5r3obd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:question-diamond-fill"} {...others} />);
}

export default Component;

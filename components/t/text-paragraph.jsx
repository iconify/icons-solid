import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnr1s3bub.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="rnr1s3bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:text-paragraph"} {...others} />);
}

export default Component;

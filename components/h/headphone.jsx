import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx9bq6bdu.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="rx9bq6bdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:headphone"} {...others} />);
}

export default Component;

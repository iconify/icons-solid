import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnnz_hrwe.css';

const viewBox = {"width":1920,"height":1536};
const content = `<path class="rnnz_hrwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:tv"} {...others} />);
}

export default Component;

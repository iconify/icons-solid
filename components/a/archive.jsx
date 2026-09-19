import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmiyzeyex.css';

const viewBox = {"width":1664,"height":1536};
const content = `<path class="bmiyzeyex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:archive"} {...others} />);
}

export default Component;

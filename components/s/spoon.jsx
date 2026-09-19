import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0b-z2s3x.css';

const viewBox = {"width":640,"height":1792};
const content = `<path class="o0b-z2s3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:spoon"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3qz6_b4t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s3qz6_b4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:format-painter-outline"} {...others} />);
}

export default Component;

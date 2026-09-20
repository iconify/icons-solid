import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3p7n55pz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s3p7n55pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:broadshouldered-person-standing"} {...others} />);
}

export default Component;

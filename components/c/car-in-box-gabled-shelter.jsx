import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0acmdbqf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b0acmdbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:car-in-box-gabled-shelter"} {...others} />);
}

export default Component;

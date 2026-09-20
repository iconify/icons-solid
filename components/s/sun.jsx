import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0qw0kh2j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h0qw0kh2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:sun"} {...others} />);
}

export default Component;

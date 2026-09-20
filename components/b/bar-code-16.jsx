import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okr-h6u1p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="okr-h6u1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:bar-code-16"} {...others} />);
}

export default Component;

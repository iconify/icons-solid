import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqcyy616u.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="dqcyy616u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:case-lowercase-16"} {...others} />);
}

export default Component;

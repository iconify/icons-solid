import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs-5ptelt.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="bs-5ptelt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:person-2-square-stack-fill"} {...others} />);
}

export default Component;

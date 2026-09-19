import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4f4nn3zt.css';
import '../../css/c/c25131bar.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c4f4nn3zt"/><path class="c25131bar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-box-double-fill-16"} {...others} />);
}

export default Component;

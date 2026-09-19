import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zndtekn6f.css';
import '../../css/c/c1_dnpbek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zndtekn6f"/><path class="c1_dnpbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:devpost"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8c9qb1jl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b p8c9qb1jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:shadcn-ui"} {...others} />);
}

export default Component;

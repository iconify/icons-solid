import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3nac-40h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z3nac-40h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:caret-down-square-fill"} {...others} />);
}

export default Component;

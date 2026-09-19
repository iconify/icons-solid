import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs_2dcbys.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bs_2dcbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:1-square-fill"} {...others} />);
}

export default Component;

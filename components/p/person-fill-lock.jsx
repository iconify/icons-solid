import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz8o_0b2g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bz8o_0b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:person-fill-lock"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zon5_mjhb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zon5_mjhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:emoji-expressionless-fill"} {...others} />);
}

export default Component;

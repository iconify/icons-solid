import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg8v_ccue.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vg8v_ccue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-merge-right-fill"} {...others} />);
}

export default Component;

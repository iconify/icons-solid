import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq_mdu9mg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eq_mdu9mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:snowcapped-mountain-valley"} {...others} />);
}

export default Component;

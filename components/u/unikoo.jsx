import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtgmpjkvu.css';
import '../../css/k/kzggjzb5i.css';

const viewBox = {"width":800,"height":800,"top":-38};
const content = `<path class="wtgmpjkvu"/><path class="kzggjzb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:unikoo"} {...others} />);
}

export default Component;

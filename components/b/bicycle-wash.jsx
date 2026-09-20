import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k49hg70lz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k49hg70lz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:bicycle-wash"} {...others} />);
}

export default Component;

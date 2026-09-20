import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9q3ovbku.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r9q3ovbku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:paintbucket-outline"} {...others} />);
}

export default Component;

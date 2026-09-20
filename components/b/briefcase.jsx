import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9ybrwe-a.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e9ybrwe-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:briefcase"} {...others} />);
}

export default Component;

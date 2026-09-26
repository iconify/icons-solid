import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g232_jeaf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g232_jeaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:content-navigator-sync-error"} {...others} />);
}

export default Component;

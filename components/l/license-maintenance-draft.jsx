import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcmkq5b4r.css';
import '../../css/f/f1ijkjbnr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hcmkq5b4r"/><path class="f1ijkjbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:license-maintenance-draft"} {...others} />);
}

export default Component;

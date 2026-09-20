import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhdgicbje.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hhdgicbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:fountain-from-fountain-basin"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia-bsglhw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ia-bsglhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:anguished-face-with-spots-in-circle"} {...others} />);
}

export default Component;

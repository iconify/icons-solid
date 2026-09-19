import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho5eq6b4k.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ho5eq6b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:sc-skype"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5i7ibc6a.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="w5i7ibc6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:heart-slash-circle-fill"} {...others} />);
}

export default Component;

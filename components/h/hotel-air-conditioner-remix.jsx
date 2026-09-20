import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzb3cmbjm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="vzb3cmbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hotel-air-conditioner-remix"} {...others} />);
}

export default Component;

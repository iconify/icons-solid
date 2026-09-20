import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkzageb0d.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="tkzageb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:business-profession-home-office-solid"} {...others} />);
}

export default Component;

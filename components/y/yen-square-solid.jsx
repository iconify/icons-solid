import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_93w0w3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r_93w0w3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:yen-square-solid"} {...others} />);
}

export default Component;

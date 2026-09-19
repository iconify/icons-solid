import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro-ic_bnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ro-ic_bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:home-solid"} {...others} />);
}

export default Component;

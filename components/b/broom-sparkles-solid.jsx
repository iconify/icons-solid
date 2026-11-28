import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez8p2nbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ez8p2nbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:broom-sparkles-solid"} {...others} />);
}

export default Component;

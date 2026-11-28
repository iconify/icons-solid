import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvzn1-v5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvzn1-v5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wallet-solid"} {...others} />);
}

export default Component;

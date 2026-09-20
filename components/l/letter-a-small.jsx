import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/typj2ptvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="typj2ptvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:letter-a-small"} {...others} />);
}

export default Component;

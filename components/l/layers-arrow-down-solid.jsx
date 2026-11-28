import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdze-ty3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdze-ty3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layers-arrow-down-solid"} {...others} />);
}

export default Component;

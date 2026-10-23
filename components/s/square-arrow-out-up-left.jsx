import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srlmxbc6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="srlmxbc6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:square-arrow-out-up-left"} {...others} />);
}

export default Component;

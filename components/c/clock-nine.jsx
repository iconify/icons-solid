import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnghrpb1d.css';
import '../../css/b/by4txvb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnghrpb1d"/><path class="by4txvb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:clock-nine"} {...others} />);
}

export default Component;

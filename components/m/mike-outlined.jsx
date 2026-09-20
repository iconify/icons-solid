import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apxrc4blx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="apxrc4blx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:mike-outlined"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoc4ocbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xoc4ocbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:border-inner"} {...others} />);
}

export default Component;

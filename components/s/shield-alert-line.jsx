import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkzr4h67j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rkzr4h67j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:shield-alert-line"} {...others} />);
}

export default Component;

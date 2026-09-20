import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7wjvtb8g.css';
import '../../css/r/ra875cffg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7wjvtb8g"/><path class="ra875cffg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-question-mark-fill"} {...others} />);
}

export default Component;

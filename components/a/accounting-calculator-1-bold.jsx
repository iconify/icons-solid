import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft06mxbzl.css';
import '../../css/d/dlzqyubkb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ft06mxbzl"/><path class="dlzqyubkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:accounting-calculator-1-bold"} {...others} />);
}

export default Component;

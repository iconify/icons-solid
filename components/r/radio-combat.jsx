import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp9a7dbdx.css';
import '../../css/d/dcr78hbrq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gp9a7dbdx"/><path class="dcr78hbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:radio-combat"} {...others} />);
}

export default Component;

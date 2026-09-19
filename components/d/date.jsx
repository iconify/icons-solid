import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx3ff8hyy.css';
import '../../css/y/y_b4318bi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xx3ff8hyy"/><path class="y_b4318bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:date"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm6mt9v_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cm6mt9v_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:qualtrics"} {...others} />);
}

export default Component;

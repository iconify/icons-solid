import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb6gv4imc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hb6gv4imc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:form-validation-cursor-choose"} {...others} />);
}

export default Component;

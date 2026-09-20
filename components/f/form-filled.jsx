import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/truvx-bjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="truvx-bjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:form-filled"} {...others} />);
}

export default Component;

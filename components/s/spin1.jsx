import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuoe7pgag.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="vuoe7pgag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontelico:spin1"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4m4ghapt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g4m4ghapt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-call-out-fill-16"} {...others} />);
}

export default Component;

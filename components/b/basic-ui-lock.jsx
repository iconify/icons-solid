import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb2prubva.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="mb2prubva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-lock"} {...others} />);
}

export default Component;

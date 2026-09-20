import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agm10xb6t.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="agm10xb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:smoking-area-remix"} {...others} />);
}

export default Component;

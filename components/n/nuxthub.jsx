import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxeyuembw.css';

const viewBox = {"width":49,"height":33};
const content = `<path clip-rule="evenodd" class="bxeyuembw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nuxthub"} {...others} />);
}

export default Component;

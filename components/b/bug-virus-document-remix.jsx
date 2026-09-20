import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo2007t4w.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="uo2007t4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:bug-virus-document-remix"} {...others} />);
}

export default Component;

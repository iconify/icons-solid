import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psxhry76x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="psxhry76x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-document-fill"} {...others} />);
}

export default Component;

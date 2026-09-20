import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nr1zambkh.css';
import '../../css/t/t577b5n6f.css';
import '../../css/d/d6n3akbru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nr1zambkh"/><path class="t577b5n6f"/><path class="d6n3akbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-markdown"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z7zgu55lz.css';
import '../../css/o/o64fwackg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z7zgu55lz"/><path class="o64fwackg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:delete-pdf"} {...others} />);
}

export default Component;

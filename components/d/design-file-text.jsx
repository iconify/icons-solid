import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/admxylbii.css';
import '../../css/r/ri6ar4dao.css';
import '../../css/f/f0grr5beu.css';
import '../../css/e/edtswhf-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="admxylbii"/><path class="ri6ar4dao"/><path class="f0grr5beu"/><path class="edtswhf-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:design-file-text"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/skhp3bbjf.css';
import '../../css/a/a-o1j2cod.css';
import '../../css/g/gyfqaublw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="skhp3bbjf"/><path class="a-o1j2cod"/><path class="gyfqaublw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:palace"} {...others} />);
}

export default Component;

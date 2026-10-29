import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uzhkxcc1u.css';
import '../../css/l/l8q459dno.css';
import '../../css/b/baoogbiqr.css';
import '../../css/m/me9aljyds.css';
import '../../css/f/f6q-rwbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uzhkxcc1u"/><path class="l8q459dno"/><path class="baoogbiqr"/><path class="me9aljyds"/><path class="f6q-rwbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-woman-curly"} {...others} />);
}

export default Component;

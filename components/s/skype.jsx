import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkprlx1pi.css';
import '../../css/i/id8zlgdpt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mkprlx1pi"/><path class="id8zlgdpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:skype"} {...others} />);
}

export default Component;

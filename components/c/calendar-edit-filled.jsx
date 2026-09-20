import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/biyv__4lr.css';
import '../../css/f/f_fvtdbvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="biyv__4lr"/><path class="f_fvtdbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:calendar-edit-filled"} {...others} />);
}

export default Component;

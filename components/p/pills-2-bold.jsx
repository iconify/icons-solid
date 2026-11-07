import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbjz5kw6b.css';
import '../../css/m/mly957b2e.css';
import '../../css/m/mjkz43bbw.css';
import '../../css/b/b8h19izcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dbjz5kw6b"/><path class="mly957b2e"/><path class="mjkz43bbw"/><path class="b8h19izcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-2-bold"} {...others} />);
}

export default Component;

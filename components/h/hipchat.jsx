import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1ibgbpxi.css';
import '../../css/z/zvg05gx_g.css';
import '../../css/d/d4-m_ebkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1ibgbpxi"/><path class="zvg05gx_g"/><path class="d4-m_ebkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:hipchat"} {...others} />);
}

export default Component;

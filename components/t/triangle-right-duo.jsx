import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6-2db7ux.css';
import '../../css/w/wyrz-1ftw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6-2db7ux secondary"/><path class="primary wyrz-1ftw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:triangle-right-duo"} {...others} />);
}

export default Component;

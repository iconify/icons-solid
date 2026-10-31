import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi1m_fwmt.css';
import '../../css/y/y55zcjfsz.css';
import '../../css/a/a_hbmibzo.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="bi1m_fwmt"/><path class="y55zcjfsz"/><path class="a_hbmibzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:germany"} {...others} />);
}

export default Component;

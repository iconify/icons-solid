import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt1hgbkfu.css';
import '../../css/t/tlvy8hbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rt1hgbkfu"/><path class="tlvy8hbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:eye"} {...others} />);
}

export default Component;

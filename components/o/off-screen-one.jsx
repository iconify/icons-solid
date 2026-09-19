import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trxsf6g2z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="trxsf6g2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:off-screen-one"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdc_khbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdc_khbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:angle-left"} {...others} />);
}

export default Component;

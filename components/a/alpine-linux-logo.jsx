import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/efw08_bbt.css';
import '../../css/q/quk6wdbwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="efw08_bbt"/><path class="quk6wdbwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:alpine-linux-logo"} {...others} />);
}

export default Component;

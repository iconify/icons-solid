import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hn0kg3bfd.css';
import '../../css/e/e22mftpxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="hn0kg3bfd"/><path class="e22mftpxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:fork-left"} {...others} />);
}

export default Component;

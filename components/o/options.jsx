import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/k/kwtkd3b7k.css';
import '../../css/r/r9r4dibst.css';
import '../../css/x/xprwyhbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="kwtkd3b7k"/><circle class="r9r4dibst"/><circle class="xprwyhbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:options"} {...others} />);
}

export default Component;

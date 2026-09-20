import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qapg4nbep.css';
import '../../css/o/ornh4vsav.css';
import '../../css/k/kkm2lbcqf.css';
import '../../css/o/o29m-dbby.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qapg4nbep"/><path class="ornh4vsav"/><path clip-rule="evenodd" class="kkm2lbcqf"/><path class="o29m-dbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:aag"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/y7q4babzs.css';
import '../../css/e/etrpw0c8o.css';
import '../../css/a/a7hrivynf.css';
import '../../css/o/oex9pkfzv.css';
import '../../css/y/ybvynld-k.css';
import '../../css/q/qb1d7h5xf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="y7q4babzs"/><circle class="etrpw0c8o"/><circle class="a7hrivynf"/><circle class="oex9pkfzv"/><path class="ybvynld-k"/><path class="qb1d7h5xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:roller-skate"} {...others} />);
}

export default Component;

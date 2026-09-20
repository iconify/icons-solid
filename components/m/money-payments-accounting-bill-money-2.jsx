import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez1rm3mhs.css';
import '../../css/g/gk8rzabdo.css';
import '../../css/h/hl1-gpb4h.css';
import '../../css/d/d48ey4_0w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ez1rm3mhs"/><path class="gk8rzabdo"/><path class="hl1-gpb4h"/><path class="d48ey4_0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:money-payments-accounting-bill-money-2"} {...others} />);
}

export default Component;

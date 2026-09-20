import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cqr75gb2c.css';
import '../../css/p/pvgr4k0ex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cqr75gb2c"/><path class="pvgr4k0ex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:receipt-japanese-yen"} {...others} />);
}

export default Component;

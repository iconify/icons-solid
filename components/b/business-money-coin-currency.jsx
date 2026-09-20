import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wesomf70y.css';
import '../../css/s/s71mep88y.css';
import '../../css/v/v5aq_m_zu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wesomf70y"/><path class="s71mep88y"/><path class="v5aq_m_zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-money-coin-currency"} {...others} />);
}

export default Component;

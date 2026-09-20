import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km7s_km6t.css';
import '../../css/n/nb04b04xe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="km7s_km6t"/><path class="nb04b04xe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:e-commerce-apparel-bold"} {...others} />);
}

export default Component;

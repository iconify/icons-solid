import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/s1so2xv2q.css';
import '../../css/c/c-m42hblv.css';
import '../../css/v/v7we92bqv.css';
import '../../css/g/gg3c-acyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="s1so2xv2q"/><path class="c-m42hblv"/><path class="v7we92bqv"/><path class="gg3c-acyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:two-finger-tap"} {...others} />);
}

export default Component;

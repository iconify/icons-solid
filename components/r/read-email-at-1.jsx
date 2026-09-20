import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/swe-3q-nj.css';
import '../../css/i/i2ve4-mmr.css';
import '../../css/z/zx8_9wx0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="swe-3q-nj"/><path class="i2ve4-mmr"/><path class="zx8_9wx0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:read-email-at-1"} {...others} />);
}

export default Component;

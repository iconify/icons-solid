import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/u/ut2705q9d.css';
import '../../css/i/i2_86lbua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="ut2705q9d"/><path class="i2_86lbua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:amazon-web-services-logo"} {...others} />);
}

export default Component;

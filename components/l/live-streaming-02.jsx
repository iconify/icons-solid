import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/f/ffhoffbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="h_tsn8bxt"/><path class="ffhoffbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:live-streaming-02"} {...others} />);
}

export default Component;

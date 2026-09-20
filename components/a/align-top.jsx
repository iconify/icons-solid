import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ann80wu5h.css';
import '../../css/b/b8oyz2b-k.css';
import '../../css/f/fllxh0mbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ann80wu5h"/><rect transform="rotate(180 19.75 16.25)" class="b8oyz2b-k"/><rect transform="rotate(180 10.25 21.25)" class="fllxh0mbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:align-top"} {...others} />);
}

export default Component;

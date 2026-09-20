import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kkb823fnn.css';
import '../../css/a/ayqu4bc6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kkb823fnn"/><path class="ayqu4bc6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:vegetable-onion"} {...others} />);
}

export default Component;

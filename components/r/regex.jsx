import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jk6sx79st.css';
import '../../css/b/bn5v7kbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jk6sx79st"/><rect class="bn5v7kbwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:regex"} {...others} />);
}

export default Component;

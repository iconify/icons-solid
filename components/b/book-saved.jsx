import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/elh5buhne.css';
import '../../css/s/sw58sgb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="elh5buhne"/><path class="sw58sgb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:book-saved"} {...others} />);
}

export default Component;

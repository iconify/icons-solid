import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzwfzrb1h.css';
import '../../css/o/o8zygebcn.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="bzwfzrb1h"/><path class="o8zygebcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:store-1-solid"} {...others} />);
}

export default Component;

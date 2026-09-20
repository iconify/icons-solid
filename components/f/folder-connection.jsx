import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/f/fk0ofebvn.css';
import '../../css/a/ai32c-22w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="fk0ofebvn"/><path class="ai32c-22w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-connection"} {...others} />);
}

export default Component;

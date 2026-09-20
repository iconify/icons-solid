import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imdqhbpbn.css';
import '../../css/i/i3t22pyfr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="imdqhbpbn"/><path class="i3t22pyfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:winrar-bold"} {...others} />);
}

export default Component;

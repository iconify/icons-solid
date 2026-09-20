import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnc0f53hn.css';
import '../../css/f/frfm2sm4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rnc0f53hn"/><path class="frfm2sm4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:upload-fill"} {...others} />);
}

export default Component;

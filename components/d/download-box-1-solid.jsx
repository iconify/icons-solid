import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soq9mxeph.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="soq9mxeph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:download-box-1-solid"} {...others} />);
}

export default Component;

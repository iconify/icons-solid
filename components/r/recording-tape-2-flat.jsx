import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjvn1nbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sjvn1nbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:recording-tape-2-flat"} {...others} />);
}

export default Component;

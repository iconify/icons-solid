import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epc7_tgau.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="epc7_tgau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:server-update"} {...others} />);
}

export default Component;

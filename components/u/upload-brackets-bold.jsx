import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl0-71bkm.css';
import '../../css/s/s7e79xbzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bl0-71bkm"/><path class="s7e79xbzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:upload-brackets-bold"} {...others} />);
}

export default Component;

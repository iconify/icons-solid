import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3eha7bzt.css';
import '../../css/r/r3a3c2hpl.css';
import '../../css/w/w5ou4mocx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3eha7bzt wm-k"/><path class="r3a3c2hpl wm-a"/><path class="w5ou4mocx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:toggle"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k75pbxo-h.css';
import '../../css/o/owfk9nbdh.css';
import '../../css/i/iqy1ivbzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k75pbxo-h wm-k"/><path class="owfk9nbdh wm-a"/><path class="iqy1ivbzl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:percent"} {...others} />);
}

export default Component;

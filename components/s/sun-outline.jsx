import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3m690lxe.css';
import '../../css/k/k5sw8vduq.css';
import '../../css/z/z7kdjtbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3m690lxe"/><path clip-rule="evenodd" class="k5sw8vduq"/><path class="z7kdjtbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:sun-outline"} {...others} />);
}

export default Component;

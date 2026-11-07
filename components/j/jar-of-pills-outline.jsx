import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvy-dbcdt.css';
import '../../css/e/ebdqu7z2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kvy-dbcdt"/><path clip-rule="evenodd" class="ebdqu7z2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuo2kw2qw.css';
import '../../css/n/n54i3ab4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iuo2kw2qw"/><path class="n54i3ab4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:partly-cloud-daytime-fill"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amp1qmb0a.css';
import '../../css/s/sgi4nb-bk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="amp1qmb0a"/><path class="sgi4nb-bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nicotine-plus"} {...others} />);
}

export default Component;

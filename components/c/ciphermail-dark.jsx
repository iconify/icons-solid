import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcz-rc2-e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tcz-rc2-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ciphermail-dark"} {...others} />);
}

export default Component;

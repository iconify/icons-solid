import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z05v8zbft.css';
import '../../css/h/hpvm9bcft.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z05v8zbft"/><path class="hpvm9bcft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cr-nmaster-dark"} {...others} />);
}

export default Component;

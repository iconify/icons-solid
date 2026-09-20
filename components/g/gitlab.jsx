import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vply4ib2u.css';
import '../../css/e/eea_i9bnw.css';
import '../../css/x/xz2rsdmzv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vply4ib2u"/><path class="eea_i9bnw"/><path class="xz2rsdmzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gitlab"} {...others} />);
}

export default Component;

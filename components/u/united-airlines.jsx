import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erzf03bmv.css';
import '../../css/i/iwbjh1dmw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="erzf03bmv"/><path class="iwbjh1dmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:united-airlines"} {...others} />);
}

export default Component;

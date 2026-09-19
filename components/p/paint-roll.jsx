import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maf_-rbzb.css';
import '../../css/k/keeeh295c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="maf_-rbzb"/><path class="keeeh295c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:paint-roll"} {...others} />);
}

export default Component;

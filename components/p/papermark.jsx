import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n11xp5baq.css';
import '../../css/a/a61ltbq0f.css';

const viewBox = {"width":512,"height":512};
const content = `<path vector-effect="non-scaling-stroke" class="n11xp5baq"/><path class="a61ltbq0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:papermark"} {...others} />);
}

export default Component;

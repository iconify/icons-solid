import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v25mscwtj.css';
import '../../css/f/fkzaws_nc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v25mscwtj"/><path class="fkzaws_nc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kanboard"} {...others} />);
}

export default Component;

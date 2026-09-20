import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0hexbc2j.css';
import '../../css/h/h447xtb1d.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="o0hexbc2j"/><path class="h447xtb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:traccar"} {...others} />);
}

export default Component;

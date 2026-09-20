import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz8cebuhr.css';
import '../../css/i/igmbzigbl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sz8cebuhr"/><path class="igmbzigbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nutalert"} {...others} />);
}

export default Component;

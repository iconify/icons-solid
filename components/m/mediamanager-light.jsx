import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf5ax2rgf.css';
import '../../css/r/r39nnteoa.css';
import '../../css/e/eog225bus.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rf5ax2rgf"/><path class="r39nnteoa"/><path class="eog225bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mediamanager-light"} {...others} />);
}

export default Component;

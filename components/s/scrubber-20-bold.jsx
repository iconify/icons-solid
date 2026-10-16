import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etp81e8xx.css';
import '../../css/s/smtmkz67c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="etp81e8xx"/><path class="smtmkz67c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scrubber-20-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6yzxzb0o.css';
import '../../css/k/kdqskdg1d.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="d6yzxzb0o"/><path class="kdqskdg1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:car-repair-11"} {...others} />);
}

export default Component;

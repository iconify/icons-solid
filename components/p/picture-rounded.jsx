import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2o2k5bfa.css';
import '../../css/e/eafmg15uh.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="e2o2k5bfa"/><path class="eafmg15uh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:picture-rounded"} {...others} />);
}

export default Component;

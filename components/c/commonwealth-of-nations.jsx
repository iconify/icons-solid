import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7wfo1l2j.css';
import '../../css/h/hpwczr9zj.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="g7wfo1l2j"/><path class="hpwczr9zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:commonwealth-of-nations"} {...others} />);
}

export default Component;

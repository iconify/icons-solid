import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbi5g97mr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hbi5g97mr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:radioactive-off"} {...others} />);
}

export default Component;

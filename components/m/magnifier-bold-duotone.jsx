import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl66i7bqg.css';
import '../../css/a/anq4ponik.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="cl66i7bqg"/><path class="anq4ponik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifier-bold-duotone"} {...others} />);
}

export default Component;

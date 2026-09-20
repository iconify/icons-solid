import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neifvedcl.css';
import '../../css/e/etgavr0mg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="neifvedcl"/><path class="etgavr0mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:check-circle"} {...others} />);
}

export default Component;

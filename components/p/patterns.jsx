import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqn7c3blc.css';
import '../../css/b/bfe0-acgo.css';
import '../../css/u/uaq5afiat.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="vqn7c3blc"/><path class="bfe0-acgo"/><circle class="uaq5afiat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:patterns"} {...others} />);
}

export default Component;

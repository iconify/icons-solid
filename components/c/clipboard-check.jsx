import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwx5nsbif.css';
import '../../css/h/hustz32ji.css';
import '../../css/i/ieqi3o5qf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iwx5nsbif wm-k"/><path class="hustz32ji wm-a"/><path class="ieqi3o5qf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:clipboard-check"} {...others} />);
}

export default Component;

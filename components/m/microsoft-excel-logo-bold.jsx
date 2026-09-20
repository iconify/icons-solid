import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/askc1k7ji.css';
import '../../css/g/g-8oyehcr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="askc1k7ji"/><path class="g-8oyehcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:microsoft-excel-logo-bold"} {...others} />);
}

export default Component;

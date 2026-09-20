import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shshedbqf.css';
import '../../css/o/og1rmsw3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="shshedbqf"/><path clip-rule="evenodd" class="og1rmsw3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:shop"} {...others} />);
}

export default Component;

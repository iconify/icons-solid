import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o20ksdzpf.css';
import '../../css/h/hbx3odb1k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o20ksdzpf"/><path class="hbx3odb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:cybersecurity"} {...others} />);
}

export default Component;

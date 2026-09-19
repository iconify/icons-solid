import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/denkpb94f.css';
import '../../css/o/ouq9fewiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="denkpb94f"/><path class="ouq9fewiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:yarn"} {...others} />);
}

export default Component;

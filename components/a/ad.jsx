import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk07qcbce.css';
import '../../css/u/uhu39ab7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gk07qcbce"/><path class="uhu39ab7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:ad"} {...others} />);
}

export default Component;

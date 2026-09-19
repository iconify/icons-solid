import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujbvu5b5g.css';
import '../../css/o/omc5y5yrn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ujbvu5b5g"/><path class="omc5y5yrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:ethos"} {...others} />);
}

export default Component;

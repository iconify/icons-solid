import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw28vh9ds.css';
import '../../css/k/kaqsw12py.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cw28vh9ds"/><path class="kaqsw12py"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:statamic-dark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf-zqubsq.css';
import '../../css/k/kb9hd4ajm.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="cf-zqubsq"/><path class="kb9hd4ajm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:passport"} {...others} />);
}

export default Component;

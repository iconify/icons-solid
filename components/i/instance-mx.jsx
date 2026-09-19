import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk8py160i.css';
import '../../css/c/c8kuy_ape.css';
import '../../css/f/ftm-s_hiy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fk8py160i"/><circle class="c8kuy_ape"/><path class="ftm-s_hiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:instance-mx"} {...others} />);
}

export default Component;

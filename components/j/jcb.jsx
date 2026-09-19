import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajbs2lbjq.css';

const viewBox = {"width":36,"height":24};
const content = `<path class="ajbs2lbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:jcb"} {...others} />);
}

export default Component;

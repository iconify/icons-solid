import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-2_bsb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-2_bsb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:curve"} {...others} />);
}

export default Component;

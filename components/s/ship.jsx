import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k150ojlno.css';
import '../../css/o/ol2nzbc1s.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="k150ojlno"/><path class="ol2nzbc1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:ship"} {...others} />);
}

export default Component;

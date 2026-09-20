import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_jt8jbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y_jt8jbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calculator-bold"} {...others} />);
}

export default Component;

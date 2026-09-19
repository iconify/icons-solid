import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw23apjax.css';
import '../../css/f/ftl0q4tvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xw23apjax"/><path class="ftl0q4tvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-money"} {...others} />);
}

export default Component;

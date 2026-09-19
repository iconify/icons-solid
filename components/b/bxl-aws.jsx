import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bitiamboi.css';
import '../../css/z/zbnf4mu7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bitiamboi"/><path class="zbnf4mu7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-aws"} {...others} />);
}

export default Component;

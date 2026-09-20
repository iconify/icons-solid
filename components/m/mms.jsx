import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d50lqeb2v.css';
import '../../css/b/b8ii2dbhb.css';

const viewBox = {"width":1000,"height":327.084};
const content = `<path class="d50lqeb2v"/><path class="b8ii2dbhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mms"} {...others} />);
}

export default Component;

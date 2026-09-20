import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lx6hsacbq.css';
import '../../css/g/g84z24b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="lx6hsacbq"/><rect class="g84z24b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:align-3-top"} {...others} />);
}

export default Component;

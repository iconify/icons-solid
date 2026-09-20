import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lx6hsacbq.css';
import '../../css/a/ax7puse6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="lx6hsacbq"/><rect class="ax7puse6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:align-3-bottom"} {...others} />);
}

export default Component;

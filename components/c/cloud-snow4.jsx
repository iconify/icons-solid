import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c0zurtb8s.css';
import '../../css/x/xcsnffbos.css';
import '../../css/w/w5rs4odyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c0zurtb8s"/><path class="xcsnffbos"/><path class="w5rs4odyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-snow4"} {...others} />);
}

export default Component;

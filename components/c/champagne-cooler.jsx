import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gh-ps-d0o.css';
import '../../css/p/py4ywmyhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gh-ps-d0o"/><path class="py4ywmyhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:champagne-cooler"} {...others} />);
}

export default Component;

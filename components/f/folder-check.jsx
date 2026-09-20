import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k426k8bwo.css';
import '../../css/d/db1ausrdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k426k8bwo"/><path class="db1ausrdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:folder-check"} {...others} />);
}

export default Component;

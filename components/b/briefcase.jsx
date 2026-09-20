import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywxjgug5p.css';
import '../../css/y/yx_uf4b1h.css';
import '../../css/u/uwgelb85v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ywxjgug5p"/><path class="yx_uf4b1h"/><path class="uwgelb85v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:briefcase"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yzf1ci52v.css';
import '../../css/h/h81wjbclo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yzf1ci52v"/><path class="h81wjbclo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:key"} {...others} />);
}

export default Component;

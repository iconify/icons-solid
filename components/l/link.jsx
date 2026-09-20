import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ujwfe_yor.css';
import '../../css/v/v5s3lxbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ujwfe_yor"/><path class="v5s3lxbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:link"} {...others} />);
}

export default Component;

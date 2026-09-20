import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rn-2cioxv.css';
import '../../css/f/fqkgllbrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rn-2cioxv"/><path class="fqkgllbrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:common-file-add"} {...others} />);
}

export default Component;

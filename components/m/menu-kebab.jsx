import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/igc2mbcca.css';
import '../../css/l/l5goj9tdn.css';
import '../../css/a/abpbqzb9d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="igc2mbcca"/><circle class="l5goj9tdn"/><circle class="abpbqzb9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:menu-kebab"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzccu8bfu.css';
import '../../css/v/vjxwbqfru.css';
import '../../css/y/y8mkib1ak.css';
import '../../css/u/un5zkmt9p.css';
import '../../css/m/mhauvu0ld.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="jzccu8bfu"/><path class="vjxwbqfru"/><circle class="y8mkib1ak"/><path class="un5zkmt9p"/><path class="mhauvu0ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-bare-metal-servers-vpc"} {...others} />);
}

export default Component;
